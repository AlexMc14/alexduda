import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "./fuentes";

export const Cierre: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Cierre"
      style={{
        backgroundColor: "#060A16",
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: 96,
      }}
    >
      <Interactive.Div
        name="Resplandor"
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(11,132,255,0.45) 0%, rgba(124,92,255,0.18) 45%, rgba(6,10,22,0) 70%)",
          scale: interpolate(frame, [0, 120], [0.85, 1.12], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Titular de cierre"
        style={{
          color: "#FFFFFF",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -2,
          lineHeight: 1.05,
          textAlign: "center",
          opacity: interpolate(frame, [0, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 40], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        Este vídeo está hecho con Remotion
      </Interactive.Div>
      <Interactive.Div
        name="Enlace"
        style={{
          color: "#4EC9FF",
          fontSize: 62,
          fontWeight: 600,
          marginTop: 44,
          opacity: interpolate(frame, [24, 44], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [24, 50], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        remotion.dev
      </Interactive.Div>
      <Interactive.Div
        name="Subrayado"
        style={{
          height: 5,
          borderRadius: 9999,
          marginTop: 12,
          background: "linear-gradient(90deg, #0B84FF 0%, #38E8B0 100%)",
          width: interpolate(frame, [36, 64], [0, 348], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Pie de cierre"
        style={{
          color: "#93A0B8",
          fontSize: 44,
          fontWeight: 400,
          marginTop: 52,
          textAlign: "center",
          opacity: interpolate(frame, [52, 74], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        React · TypeScript · Render en la nube
      </Interactive.Div>
    </AbsoluteFill>
  );
};
