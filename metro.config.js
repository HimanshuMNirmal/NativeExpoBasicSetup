const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Configure Metro bundler to resolve @ as the root folder
config.resolver = {
  ...config.resolver,
  alias: {
    '@': __dirname, // Resolve @ to the root directory
  },
};

// Add NativeWind support
module.exports = withNativeWind(config, { input: "./global.css" });
