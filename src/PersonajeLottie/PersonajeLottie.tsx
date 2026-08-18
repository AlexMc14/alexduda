import { Lottie, LottieAnimationData } from "@remotion/lottie";
import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  cancelRender,
  continueRender,
  delayRender,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "../VentajasRemotion/fuentes";

export const PersonajeLottie: React.FC = () => {
  const frame = useCurrentFrame();
  const [handle] = useState(() => delayRender("Cargando el Lottie"));
  const [animacion, setAnimacion] = useState<LottieAnimationData | null>(null);

  useEffect(() => {
    fetch(staticFile("lottie/boxeador.json"))
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setAnimacion(datos);
        continueRender(handle);
      })
      .catch((error) => {
        cancelRender(error);
      });
  }, [handle]);

  return (
    <AbsoluteFill
      name="Personaje Lottie"
      style={{
        backgroundColor: "#060A16",
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: "110px 96px",
      }}
    >
      <Interactive.Div
        name="Resplandor"
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(124,92,255,0.32) 0%, rgba(6,10,22,0) 68%)",
        }}
      />
      <Interactive.Div
        name="Titular"
        style={{
          color: "#FFFFFF",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -2,
          textAlign: "center",
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 28], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Un personaje Lottie
      </Interactive.Div>
      <Interactive.Div
        name="Escenario"
        style={{
          width: 700,
          height: 700,
          marginTop: 24,
          borderRadius: 40,
          border: "2px solid rgba(143,198,255,0.18)",
          backgroundColor: "rgba(16,26,46,0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: interpolate(frame, [10, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [10, 44], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        {animacion === null ? null : (
          <Lottie
            animationData={animacion}
            loop
            style={{ width: 620, height: 620 }}
          />
        )}
      </Interactive.Div>
      <Interactive.Div
        name="Pie"
        style={{
          color: "#93A0B8",
          fontSize: 44,
          fontWeight: 400,
          marginTop: 28,
          textAlign: "center",
          opacity: interpolate(frame, [26, 46], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        boxeador.json · 90 frames en bucle
      </Interactive.Div>
    </AbsoluteFill>
  );
};
