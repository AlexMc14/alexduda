import "./index.css";
import { Composition, Folder } from "remotion";
import { MyComposition } from "./Composition";
import { Cierre } from "./VentajasRemotion/Cierre";
import { Escena01React } from "./VentajasRemotion/Escena01React";
import { Escena02Parametrico } from "./VentajasRemotion/Escena02Parametrico";
import { Escena03Ecosistema } from "./VentajasRemotion/Escena03Ecosistema";
import { Escena04Studio } from "./VentajasRemotion/Escena04Studio";
import { Intro } from "./VentajasRemotion/Intro";
import { VentajasRemotion } from "./VentajasRemotion/VentajasRemotion";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VentajasDeRemotion"
        component={VentajasRemotion}
        durationInFrames={750}
        fps={30}
        width={1080}
        height={1080}
      />
      <Folder name="Escenas">
        <Composition
          id="Intro"
          component={Intro}
          durationInFrames={140}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="Ventaja01React"
          component={Escena01React}
          durationInFrames={140}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="Ventaja02Parametrico"
          component={Escena02Parametrico}
          durationInFrames={140}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="Ventaja03Ecosistema"
          component={Escena03Ecosistema}
          durationInFrames={140}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="Ventaja04Studio"
          component={Escena04Studio}
          durationInFrames={140}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="Cierre"
          component={Cierre}
          durationInFrames={125}
          fps={30}
          width={1080}
          height={1080}
        />
      </Folder>
      <MyComposition />
    </>
  );
};
