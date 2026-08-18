/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideBundlerConfig(enableTailwind);
// Las fuentes locales se cargan con delayRender(); en máquinas lentas el
// timeout por defecto (28 s) se queda corto en algún frame suelto.
Config.setDelayRenderTimeoutInMilliseconds(120000);
