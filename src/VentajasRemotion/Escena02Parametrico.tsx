import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily, monoFontFamily } from "./fuentes";

export const Escena02Parametrico: React.FC = () => {
  const frame = useCurrentFrame();
  const nombre = frame < 46 ? "Ana" : frame < 92 ? "Luis" : "Marta";

  return (
    <AbsoluteFill
      name="Ventaja 02"
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
          top: -240,
          right: -300,
          width: 900,
          height: 900,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(124,92,255,0.30) 0%, rgba(6,10,22,0) 65%)",
        }}
      />
      <Interactive.Div
        name="Número de ventaja"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 22,
          marginBottom: 26,
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
            backgroundColor: "#7C5CFF",
          }}
        >
          02
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
          marginBottom: 30,
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
        Un vídeo, mil versiones
      </Interactive.Div>
      <Interactive.Div
        name="Tarjeta de datos"
        style={{
          width: 888,
          padding: 30,
          borderRadius: 24,
          border: "2px solid rgba(143,198,255,0.18)",
          backgroundColor: "rgba(16,26,46,0.92)",
          fontFamily: monoFontFamily,
          fontSize: 30,
          lineHeight: 1.4,
          whiteSpace: "pre",
          color: "#7A88A6",
          opacity: interpolate(frame, [16, 32], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [16, 40], ["0px 26px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div>{"props = {"}</div>
        <div>
          <span style={{ color: "#FFB86B" }}>{"  nombre"}</span>
          <span style={{ color: "#7A88A6" }}>{": "}</span>
          <span
            style={{
              color: "#38E8B0",
              opacity: interpolate(
                frame,
                [42, 46, 52, 88, 92, 98],
                [1, 0.15, 1, 1, 0.15, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
            }}
          >
            {`"${nombre}"`}
          </span>
        </div>
        <div>{"}"}</div>
      </Interactive.Div>
      <Interactive.Div
        name="Flecha"
        style={{
          width: 888,
          textAlign: "center",
          color: "#4EC9FF",
          fontSize: 46,
          fontWeight: 800,
          padding: "8px 0px",
          opacity: interpolate(frame, [28, 42], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ↓
      </Interactive.Div>
      <Interactive.Div
        name="Vídeo generado"
        style={{
          width: 888,
          padding: 44,
          borderRadius: 28,
          background: "linear-gradient(135deg, #0B84FF 0%, #7C5CFF 100%)",
          opacity: interpolate(frame, [34, 50], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [34, 64], [0.93, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <Interactive.Div
          name="Saludo personalizado"
          style={{
            color: "#FFFFFF",
            fontSize: 66,
            fontWeight: 800,
            letterSpacing: -1,
            scale: interpolate(
              frame,
              [42, 48, 56, 88, 94, 102],
              [1, 0.9, 1, 1, 0.9, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                output: "perceptual-scale",
              },
            ),
          }}
        >
          {`Hola, ${nombre}`}
        </Interactive.Div>
        <Interactive.Div
          name="Línea del vídeo generado"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: 40,
            fontWeight: 400,
            marginTop: 14,
          }}
        >
          Tu resumen personal de agosto
        </Interactive.Div>
      </Interactive.Div>
      <Interactive.Div
        name="Pie de escena"
        style={{
          color: "#93A0B8",
          fontSize: 46,
          fontWeight: 400,
          marginTop: 26,
          opacity: interpolate(frame, [70, 88], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Cambia los datos y renderiza para cada usuario.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
