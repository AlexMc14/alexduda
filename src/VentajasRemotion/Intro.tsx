import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "./fuentes";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Intro"
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
            "radial-gradient(circle, rgba(11,132,255,0.55) 0%, rgba(124,92,255,0.20) 42%, rgba(6,10,22,0) 68%)",
          scale: interpolate(frame, [0, 130], [0.75, 1.15], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Etiqueta superior"
        style={{
          color: "#8FC6FF",
          fontSize: 38,
          fontWeight: 600,
          letterSpacing: 12,
          padding: "16px 34px",
          borderRadius: 9999,
          border: "2px solid rgba(143,198,255,0.35)",
          backgroundColor: "rgba(11,132,255,0.10)",
          marginBottom: 54,
          opacity: interpolate(frame, [0, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 24], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        REMOTION
      </Interactive.Div>
      <Interactive.Div
        name="Titular"
        style={{
          color: "#FFFFFF",
          fontSize: 118,
          fontWeight: 800,
          letterSpacing: -3,
          lineHeight: 1.02,
          textAlign: "center",
          opacity: interpolate(frame, [8, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [8, 46], [0.88, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        Vídeo hecho con React
      </Interactive.Div>
      <Interactive.Div
        name="Subtítulo"
        style={{
          color: "#93A0B8",
          fontSize: 48,
          fontWeight: 400,
          textAlign: "center",
          marginTop: 36,
          opacity: interpolate(frame, [30, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [30, 58], ["0px 26px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Cuatro ventajas en veinticinco segundos
      </Interactive.Div>
    </AbsoluteFill>
  );
};
