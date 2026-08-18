// Genera public/lottie/boxeador.json: un personaje Lottie (bodymovin v5)
// dibujado por completo desde código, sin depender de ningún asset externo.
//
//   node scripts/generar-lottie-boxeador.mjs
//
// El archivo resultante es un Lottie estándar: se puede abrir en LottieFiles,
// en lottie-web o en cualquier reproductor, no solo en Remotion.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FPS = 30;
const DURACION = 90; // 3 s en bucle
const ANCHO = 512;
const ALTO = 512;

// Paleta, en el formato de Lottie: [r, g, b, a] normalizado de 0 a 1.
const hex = (color) => [
  parseInt(color.slice(1, 3), 16) / 255,
  parseInt(color.slice(3, 5), 16) / 255,
  parseInt(color.slice(5, 7), 16) / 255,
  1,
];

const PIEL = hex("#F2C9A0");
const PELO = hex("#2A1C14");
const CAMISETA = hex("#0B84FF");
const PANTALON = hex("#16203A");
const GUANTE = hex("#7C5CFF");
const CINTA = hex("#38E8B0");
const OSCURO = hex("#16203A");

// --- Helpers de propiedades animables ------------------------------------

const estatico = (valor) => ({ a: 0, k: valor });

// Cada fotograma clave lleva su propio easing; el último solo el valor.
const animado = (fotogramas) => ({
  a: 1,
  k: fotogramas.map((fotograma, indice) => {
    const valor = Array.isArray(fotograma.v) ? fotograma.v : [fotograma.v];
    if (indice === fotogramas.length - 1) {
      return { t: fotograma.t, s: valor };
    }
    return {
      t: fotograma.t,
      s: valor,
      i: { x: [0.35], y: [1] },
      o: { x: [0.65], y: [0] },
    };
  }),
});

const relleno = (color) => ({
  ty: "fl",
  c: estatico(color),
  o: estatico(100),
  r: 1,
  nm: "Relleno",
});

const transformacionGrupo = () => ({
  ty: "tr",
  p: estatico([0, 0]),
  a: estatico([0, 0]),
  s: estatico([100, 100]),
  r: estatico(0),
  o: estatico(100),
  nm: "Transformación",
});

const elipse = (nombre, [x, y], [ancho, alto], color) => ({
  ty: "gr",
  nm: nombre,
  it: [
    { ty: "el", p: estatico([x, y]), s: estatico([ancho, alto]), d: 1 },
    relleno(color),
    transformacionGrupo(),
  ],
});

const rectangulo = (nombre, [x, y], [ancho, alto], radio, color) => ({
  ty: "gr",
  nm: nombre,
  it: [
    {
      ty: "rc",
      p: estatico([x, y]),
      s: estatico([ancho, alto]),
      r: estatico(radio),
      d: 1,
    },
    relleno(color),
    transformacionGrupo(),
  ],
});

const capa = ({
  ind,
  nm,
  parent,
  posicion,
  ancla = [0, 0],
  rotacion = estatico(0),
  escala = estatico([100, 100, 100]),
  shapes = [],
  tipo = 4,
}) => {
  const capaLottie = {
    ddd: 0,
    ind,
    ty: tipo,
    nm,
    sr: 1,
    ks: {
      o: estatico(100),
      r: rotacion,
      p: posicion,
      a: estatico(ancla),
      s: escala,
    },
    ao: 0,
    shapes,
    ip: 0,
    op: DURACION,
    st: 0,
    bm: 0,
  };
  if (tipo === 3) {
    delete capaLottie.shapes;
    capaLottie.sw = 100;
    capaLottie.sh = 100;
  }
  if (parent !== undefined) {
    capaLottie.parent = parent;
  }
  return capaLottie;
};

// --- Movimiento -----------------------------------------------------------

// El cuerpo entero rebota: dos ciclos completos en los 90 fotogramas.
const rebote = animado([
  { t: 0, v: [0, 0, 0] },
  { t: 22, v: [0, -12, 0] },
  { t: 45, v: [0, 0, 0] },
  { t: 67, v: [0, -12, 0] },
  { t: 90, v: [0, 0, 0] },
]);

// Brazo derecho: guardia junto a la cara y cross entre los fotogramas 6 y 30.
const brazoDerecho = animado([
  { t: 0, v: -150 },
  { t: 6, v: -158 },
  { t: 16, v: -100 },
  { t: 30, v: -150 },
  { t: 90, v: -150 },
]);

// Al golpear el brazo también se estira: es lo que hace legible el gesto.
const estiradoDerecho = animado([
  { t: 0, v: [100, 100, 100] },
  { t: 6, v: [100, 96, 100] },
  { t: 16, v: [100, 138, 100] },
  { t: 30, v: [100, 100, 100] },
  { t: 90, v: [100, 100, 100] },
]);

// Brazo izquierdo: el mismo golpe, medio ciclo después.
const brazoIzquierdo = animado([
  { t: 0, v: 150 },
  { t: 45, v: 150 },
  { t: 51, v: 158 },
  { t: 61, v: 100 },
  { t: 75, v: 150 },
  { t: 90, v: 150 },
]);

const estiradoIzquierdo = animado([
  { t: 0, v: [100, 100, 100] },
  { t: 45, v: [100, 100, 100] },
  { t: 51, v: [100, 96, 100] },
  { t: 61, v: [100, 138, 100] },
  { t: 75, v: [100, 100, 100] },
  { t: 90, v: [100, 100, 100] },
]);

// El torso acompaña al golpe con una ligera torsión.
const giroTorso = animado([
  { t: 0, v: 0 },
  { t: 16, v: -5 },
  { t: 30, v: 0 },
  { t: 61, v: 5 },
  { t: 75, v: 0 },
  { t: 90, v: 0 },
]);

// --- Capas ----------------------------------------------------------------

// Orden del array = orden de pintado: la primera capa queda delante.
const capas = [
  capa({
    ind: 1,
    nm: "Brazo derecho",
    parent: 6,
    posicion: estatico([52, -70, 0]),
    rotacion: brazoDerecho,
    escala: estiradoDerecho,
    shapes: [
      elipse("Guante derecho", [0, 102], [74, 74], GUANTE),
      rectangulo("Antebrazo derecho", [0, 40], [36, 88], 18, PIEL),
    ],
  }),
  capa({
    ind: 2,
    nm: "Brazo izquierdo",
    parent: 6,
    posicion: estatico([-52, -70, 0]),
    rotacion: brazoIzquierdo,
    escala: estiradoIzquierdo,
    shapes: [
      elipse("Guante izquierdo", [0, 102], [74, 74], GUANTE),
      rectangulo("Antebrazo izquierdo", [0, 40], [36, 88], 18, PIEL),
    ],
  }),
  capa({
    ind: 3,
    nm: "Cabeza",
    parent: 6,
    posicion: estatico([0, -150, 0]),
    shapes: [
      rectangulo("Cinta", [0, -30], [124, 24], 10, CINTA),
      elipse("Ojo derecho", [22, 4], [13, 17], OSCURO),
      elipse("Ojo izquierdo", [-22, 4], [13, 17], OSCURO),
      rectangulo("Boca", [0, 32], [30, 10], 5, OSCURO),
      elipse("Pelo", [0, -34], [118, 70], PELO),
      elipse("Cara", [0, 0], [116, 116], PIEL),
      rectangulo("Cuello", [0, 62], [42, 34], 6, PIEL),
    ],
  }),
  capa({
    ind: 4,
    nm: "Torso",
    parent: 6,
    posicion: estatico([0, 0, 0]),
    rotacion: giroTorso,
    shapes: [
      rectangulo("Camiseta", [0, -10], [152, 170], 44, CAMISETA),
      rectangulo("Pantalón", [0, 78], [156, 76], 26, PANTALON),
    ],
  }),
  capa({
    ind: 5,
    nm: "Piernas",
    parent: 6,
    posicion: estatico([0, 0, 0]),
    shapes: [
      elipse("Zapatilla derecha", [40, 206], [66, 32], OSCURO),
      elipse("Zapatilla izquierda", [-40, 206], [66, 32], OSCURO),
      rectangulo("Pierna derecha", [40, 132], [50, 148], 25, PIEL),
      rectangulo("Pierna izquierda", [-40, 132], [50, 148], 25, PIEL),
    ],
  }),
  capa({
    ind: 6,
    nm: "Raíz",
    tipo: 3,
    posicion: rebote,
  }),
];

// El nulo raíz coloca al personaje dentro del lienzo de 512x512.
capas[capas.length - 1].ks.p = {
  a: 1,
  k: rebote.k.map((fotograma) => ({
    ...fotograma,
    s: [ANCHO / 2, ALTO / 2 - 25 + fotograma.s[1], 0],
  })),
};

const animacion = {
  v: "5.7.4",
  fr: FPS,
  ip: 0,
  op: DURACION,
  w: ANCHO,
  h: ALTO,
  nm: "Boxeador",
  ddd: 0,
  assets: [],
  layers: capas,
  markers: [],
};

const destino = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "lottie",
  "boxeador.json",
);

mkdirSync(dirname(destino), { recursive: true });
writeFileSync(destino, JSON.stringify(animacion, null, 2));
console.log(`Escrito ${destino}`);
