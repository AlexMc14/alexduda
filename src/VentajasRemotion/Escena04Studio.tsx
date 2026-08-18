import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "./fuentes";

export const Escena04Studio: React.FC = () => {
  const frame = useCurrentFrame();
  const progreso = Math.round(
    interpolate(frame, [34, 118], [0, 100], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return (
    <AbsoluteFill
      name="Ventaja 04"
      style={{
        backgroundColor: "#060A16",
        fontFamily,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "110px 96px",
      }}
    >
      <Interactive.Div
        name="Resplandor"
        style={{
          position: "absolute",
          top: -200,
          right: -260,
          width: 900,
          height: 900,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(11,132,255,0.28) 0%, rgba(6,10,22,0) 65%)",
        }}
      />
      <Interactive.Div
        name="Número de ventaja"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 22,
          marginBottom: 24,
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 22], ["-40px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: 1,
            padding: "10px 22px",
            borderRadius: 16,
            backgroundColor: "#FF7B9C",
          }}
        >
          04
        </span>
        <span
          style={{
            color: "#93A0B8",
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: 8,
          }}
        >
          VENTAJA
        </span>
      </Interactive.Div>
      <Interactive.Div
        name="Titular"
        style={{
          color: "#FFFFFF",
          fontSize: 86,
          fontWeight: 800,
          letterSpacing: -2,
          lineHeight: 1.06,
          marginBottom: 28,
          opacity: interpolate(frame, [6, 26], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [6, 34], ["0px 34px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Ves cada cambio al instante
      </Interactive.Div>
      <Interactive.Div
        name="Ventana del Studio"
        style={{
          width: 888,
          borderRadius: 28,
          border: "2px solid rgba(143,198,255,0.18)",
          backgroundColor: "rgba(13,21,38,0.95)",
          overflow: "hidden",
          opacity: interpolate(frame, [14, 32], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [14, 46], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <Interactive.Div
          name="Barra de título"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
            padding: "18px 26px",
            borderBottom: "2px solid rgba(143,198,255,0.14)",
            color: "#7A88A6",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              backgroundColor: "#FF7B9C",
            }}
          />
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              backgroundColor: "#FFD37A",
            }}
          />
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              backgroundColor: "#38E8B0",
              marginRight: 14,
            }}
          />
          Remotion Studio
        </Interactive.Div>
        <Interactive.Div
          name="Lienzo del Studio"
          style={{
            height: 190,
            margin: 26,
            borderRadius: 18,
            background: "linear-gradient(135deg, #0B84FF 0%, #7C5CFF 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Interactive.Div
            name="Contenido del lienzo"
            style={{
              color: "#FFFFFF",
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: -1,
              opacity: interpolate(frame, [26, 40], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
              rotate: interpolate(frame, [26, 120], ["-6deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200 }),
              }),
            }}
          >
            Preview en vivo
          </Interactive.Div>
        </Interactive.Div>
        <Interactive.Div
          name="Línea de tiempo"
          style={{
            position: "relative",
            padding: "0px 26px 26px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Interactive.Div
            name="Capa 1"
            style={{
              height: 26,
              width: 700,
              borderRadius: 8,
              backgroundColor: "rgba(11,132,255,0.55)",
            }}
          />
          <Interactive.Div
            name="Capa 2"
            style={{
              height: 26,
              width: 480,
              marginLeft: 120,
              borderRadius: 8,
              backgroundColor: "rgba(124,92,255,0.55)",
            }}
          />
          <Interactive.Div
            name="Capa 3"
            style={{
              height: 26,
              width: 320,
              marginLeft: 300,
              borderRadius: 8,
              backgroundColor: "rgba(56,232,176,0.5)",
            }}
          />
          <Interactive.Div
            name="Cabezal de reproducción"
            style={{
              position: "absolute",
              top: 0,
              left: 26,
              width: 4,
              height: 114,
              borderRadius: 9999,
              backgroundColor: "#FFFFFF",
              translate: interpolate(
                frame,
                [20, 130],
                ["0px 0px", "780px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.linear,
                },
              ),
            }}
          />
        </Interactive.Div>
      </Interactive.Div>
      <Interactive.Div
        name="Etiqueta de render"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 888,
          marginTop: 30,
          color: "#93A0B8",
          fontSize: 44,
          fontWeight: 600,
          opacity: interpolate(frame, [30, 46], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span>Y renderizas en paralelo</span>
        <span style={{ color: "#38E8B0" }}>{`${progreso} %`}</span>
      </Interactive.Div>
      <Interactive.Div
        name="Barra de progreso"
        style={{
          width: 888,
          height: 18,
          marginTop: 16,
          borderRadius: 9999,
          backgroundColor: "rgba(143,198,255,0.16)",
          overflow: "hidden",
          opacity: interpolate(frame, [30, 46], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Relleno del progreso"
          style={{
            height: 18,
            borderRadius: 9999,
            background: "linear-gradient(90deg, #0B84FF 0%, #38E8B0 100%)",
            width: interpolate(frame, [34, 118], [0, 888], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
