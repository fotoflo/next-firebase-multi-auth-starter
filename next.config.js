const { default: next } = require("next");
// Avoid using new JavaScript features not available in your target Node.js version.
// next.config.js will not be parsed by Webpack, Babel or TypeScript.

/**
 * @type {import('next').NextConfig & DEFAULT_THEME & ADAPTER_COLLECTION_NAME & USE_FIREBASE_EMULATOR}
 *
 * Our convention is to use app configuration CONSTANTS in capitals
 **/

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  clientSide: typeof window !== "undefined",
  serverSide: typeof window === "undefined",
  webConfig: {
    env: process.env.NODE_ENV,
  },
  DEFAULT_THEME: "dark",
  ADAPTER_COLLECTION_NAME: "next_auth",
  USE_FIREBASE_EMULATOR: true,
};

if (nextConfig.clientSide) {
  nextConfig.webConfig = {
    env: window.location.host.match("localhost") ? "dev" : "prod",
  };
}

module.exports = nextConfig;
