import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Las fuentes viven en public/fonts/ para que el render no dependa de la red.
// loadFont() usa delayRender() internamente, así que el render espera a que
// estén listas sin necesidad de await de nivel superior.
loadFont({
  family: "Inter",
  url: staticFile("fonts/Inter-400.woff2"),
  weight: "400",
});
loadFont({
  family: "Inter",
  url: staticFile("fonts/Inter-600.woff2"),
  weight: "600",
});
loadFont({
  family: "Inter",
  url: staticFile("fonts/Inter-800.woff2"),
  weight: "800",
});
loadFont({
  family: "JetBrains Mono",
  url: staticFile("fonts/JetBrainsMono-400.woff2"),
  weight: "400",
});
loadFont({
  family: "JetBrains Mono",
  url: staticFile("fonts/JetBrainsMono-700.woff2"),
  weight: "700",
});

export const fontFamily = "Inter, sans-serif";
export const monoFontFamily = "JetBrains Mono, monospace";
