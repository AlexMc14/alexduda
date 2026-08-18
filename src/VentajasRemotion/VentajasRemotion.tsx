import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cierre } from "./Cierre";
import { Escena01React } from "./Escena01React";
import { Escena02Parametrico } from "./Escena02Parametrico";
import { Escena03Ecosistema } from "./Escena03Ecosistema";
import { Escena04Studio } from "./Escena04Studio";
import { Intro } from "./Intro";

export const VentajasRemotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Ventajas de Remotion"
      style={{ backgroundColor: "#060A16" }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={140} name="Intro">
          <Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={140} name="Ventaja 01">
          <Escena01React />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={140} name="Ventaja 02">
          <Escena02Parametrico />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={140} name="Ventaja 03">
          <Escena03Ecosistema />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={140} name="Ventaja 04">
          <Escena04Studio />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={125} name="Cierre">
          <Cierre />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Interactive.Div
        name="Barra de avance"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 8,
          background: "linear-gradient(90deg, #0B84FF 0%, #38E8B0 100%)",
          width: interpolate(frame, [0, durationInFrames], [0, 1080], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
