# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Vídeo: Ventajas de Remotion

Vídeo cuadrado (1080×1080) de 25 s sobre las ventajas de Remotion, en
`src/VentajasRemotion/`. Cada escena vive en su propio archivo y se encadenan
con `<TransitionSeries>` en `VentajasRemotion.tsx`.

| Composición            | Duración   | Contenido                          |
| ---------------------- | ---------- | ---------------------------------- |
| `VentajasDeRemotion`   | 750 frames | El vídeo completo                  |
| `Intro`                | 140        | Portada                            |
| `Ventaja01React`       | 140        | Todo el vídeo es código React      |
| `Ventaja02Parametrico` | 140        | Un vídeo, mil versiones            |
| `Ventaja03Ecosistema`  | 140        | Todo el ecosistema web             |
| `Ventaja04Studio`      | 140        | Preview al instante y render       |
| `Cierre`               | 125        | Cierre y enlace                    |

Las escenas también están registradas por separado (carpeta «Escenas» del
Studio) para poder editarlas de una en una.

Renderizar solo este vídeo:

```console
npx remotion render VentajasDeRemotion out/ventajas-remotion.mp4
```

Las tipografías (Inter y JetBrains Mono) están en `public/fonts/` y se cargan
con `@remotion/fonts`, así que el render no necesita conexión a internet.

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
