// CRACO configuration.
//
// Purpose: react-scripts 5.0.1 pins webpack-dev-server v4, which carries a few
// (dev-server-only) security advisories. We pin webpack-dev-server to the
// patched v5 via "resolutions" in package.json to clear those advisories, but
// v5 changed its options schema. This override adapts react-scripts' generated
// dev-server config to the v5 API so `yarn dev` (craco start) keeps working.
//
// The production build (`react-scripts build`) does not use webpack-dev-server
// and is intentionally left on plain react-scripts, so this file only affects
// local development.
module.exports = {
  devServer: (devServerConfig) => {
    // v5 removed onBeforeSetupMiddleware / onAfterSetupMiddleware in favour of
    // a single setupMiddlewares hook.
    const onBefore = devServerConfig.onBeforeSetupMiddleware;
    const onAfter = devServerConfig.onAfterSetupMiddleware;
    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (typeof onBefore === 'function') onBefore(devServer);
      if (typeof onAfter === 'function') onAfter(devServer);
      return middlewares;
    };

    // v5 replaced the `https` option with `server`.
    if ('https' in devServerConfig) {
      const https = devServerConfig.https;
      delete devServerConfig.https;
      if (https) {
        devServerConfig.server = {
          type: 'https',
          options: typeof https === 'object' ? https : undefined,
        };
      }
    }

    return devServerConfig;
  },
};
