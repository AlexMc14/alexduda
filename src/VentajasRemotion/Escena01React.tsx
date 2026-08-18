import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily, monoFontFamily } from "./fuentes";

export const Escena01React: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Ventaja 01"
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
          top: -260,
          left: -220,
          width: 900,
          height: 900,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(11,132,255,0.30) 0%, rgba(6,10,22,0) 65%)",
        }}
      />
      <Interactive.Div
        name="Número de ventaja"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 22,
          marginBottom: 30,
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
            backgroundColor: "#0B84FF",
          }}
        >
          01
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
          marginBottom: 34,
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
        Todo el vídeo es código React
      </Interactive.Div>
      <Interactive.Div
        name="Tarjeta de código"
        style={{
          width: 888,
          padding: 36,
          borderRadius: 28,
          border: "2px solid rgba(143,198,255,0.18)",
          backgroundColor: "rgba(16,26,46,0.92)",
          fontFamily: monoFontFamily,
          fontSize: 30,
          lineHeight: 1.45,
          whiteSpace: "pre",
          opacity: interpolate(frame, [18, 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [18, 50], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <Interactive.Div
          name="Código línea 1"
          style={{
            opacity: interpolate(frame, [26, 38], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#A78BFA" }}>{"const"}</span>
          <span style={{ color: "#4EC9FF" }}>{" Titulo"}</span>
          <span style={{ color: "#7A88A6" }}>{" = () => {"}</span>
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 2"
          style={{
            opacity: interpolate(frame, [32, 44], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#A78BFA" }}>{"  const"}</span>
          <span style={{ color: "#E6EDF7" }}>{" frame"}</span>
          <span style={{ color: "#7A88A6" }}>{" = "}</span>
          <span style={{ color: "#38E8B0" }}>{"useCurrentFrame"}</span>
          <span style={{ color: "#7A88A6" }}>{"();"}</span>
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 3"
          style={{
            opacity: interpolate(frame, [38, 50], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#A78BFA" }}>{"  return"}</span>
          <span style={{ color: "#7A88A6" }}>{" ("}</span>
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 4"
          style={{
            opacity: interpolate(frame, [44, 56], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#7A88A6" }}>{"    <"}</span>
          <span style={{ color: "#FF7B9C" }}>{"h1"}</span>
          <span style={{ color: "#FFB86B" }}>{" style"}</span>
          <span style={{ color: "#7A88A6" }}>{"={{"}</span>
          <span style={{ color: "#FFB86B" }}>{"opacity"}</span>
          <span style={{ color: "#7A88A6" }}>{": "}</span>
          <span style={{ color: "#E6EDF7" }}>{"frame"}</span>
          <span style={{ color: "#7A88A6" }}>{" / "}</span>
          <span style={{ color: "#FFD37A" }}>{"30"}</span>
          <span style={{ color: "#7A88A6" }}>{"}}>"}</span>
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 5"
          style={{
            color: "#E6EDF7",
            opacity: interpolate(frame, [50, 62], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          {"      ¡Hola!"}
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 6"
          style={{
            opacity: interpolate(frame, [56, 68], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#7A88A6" }}>{"    </"}</span>
          <span style={{ color: "#FF7B9C" }}>{"h1"}</span>
          <span style={{ color: "#7A88A6" }}>{">"}</span>
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 7"
          style={{
            color: "#7A88A6",
            opacity: interpolate(frame, [62, 74], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          {"  );"}
        </Interactive.Div>
        <Interactive.Div
          name="Código línea 8"
          style={{
            color: "#7A88A6",
            opacity: interpolate(frame, [68, 80], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          {"};"}
        </Interactive.Div>
      </Interactive.Div>
      <Interactive.Div
        name="Pie de escena"
        style={{
          color: "#93A0B8",
          fontSize: 46,
          fontWeight: 400,
          marginTop: 30,
          opacity: interpolate(frame, [74, 92], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Componentes, props y estado, como en cualquier app.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
