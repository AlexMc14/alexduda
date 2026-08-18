import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "./fuentes";

export const Escena03Ecosistema: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Ventaja 03"
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
          bottom: -320,
          left: -180,
          width: 950,
          height: 950,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(56,232,176,0.22) 0%, rgba(6,10,22,0) 65%)",
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
            color: "#06231B",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: 1,
            padding: "10px 22px",
            borderRadius: 16,
            backgroundColor: "#38E8B0",
          }}
        >
          03
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
          marginBottom: 40,
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
        Todo el ecosistema web, dentro del vídeo
      </Interactive.Div>
      <Interactive.Div
        name="Librerías"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          width: 888,
        }}
      >
        <Interactive.Div
          name="Chip npm"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [20, 32], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [20, 44], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          npm
        </Interactive.Div>
        <Interactive.Div
          name="Chip TypeScript"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [24, 36], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [24, 48], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          TypeScript
        </Interactive.Div>
        <Interactive.Div
          name="Chip Tailwind"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [28, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [28, 52], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          Tailwind
        </Interactive.Div>
        <Interactive.Div
          name="Chip Three.js"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [32, 44], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [32, 56], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          Three.js
        </Interactive.Div>
        <Interactive.Div
          name="Chip D3"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [36, 48], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [36, 60], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          D3
        </Interactive.Div>
        <Interactive.Div
          name="Chip SVG"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [40, 52], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [40, 64], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          SVG
        </Interactive.Div>
        <Interactive.Div
          name="Chip Canvas"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [44, 56], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [44, 68], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          Canvas
        </Interactive.Div>
        <Interactive.Div
          name="Chip Lottie"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [48, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [48, 72], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          Lottie
        </Interactive.Div>
        <Interactive.Div
          name="Chip Mapas"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [52, 64], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [52, 76], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          Mapas
        </Interactive.Div>
        <Interactive.Div
          name="Chip APIs"
          style={{
            color: "#E6EDF7",
            fontSize: 44,
            fontWeight: 600,
            padding: "14px 30px",
            borderRadius: 9999,
            border: "2px solid rgba(143,198,255,0.22)",
            backgroundColor: "rgba(16,26,46,0.9)",
            opacity: interpolate(frame, [56, 68], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [56, 80], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          APIs
        </Interactive.Div>
      </Interactive.Div>
      <Interactive.Div
        name="Pie de escena"
        style={{
          color: "#93A0B8",
          fontSize: 46,
          fontWeight: 400,
          marginTop: 40,
          opacity: interpolate(frame, [72, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Cualquier librería de React, sin adaptaciones.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
