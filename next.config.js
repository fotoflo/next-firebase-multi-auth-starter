const { default: next } = require("next");
// Avoid using new JavaScript features not available in your target Node.js version.
// next.config.js will not be parsed by Webpack, Babel or TypeScript.

/**
 * @type {import('next').NextConfig
 * @param IS_CLIENT_SIDE = boolean
 * @param IS_SERVER_SIDE = boolean
 * @param IS_LOCAL_ENV = boolean
 * @param USE_FIREBASE_EMULATOR = boolean
 * @param DEFAULT_THEME = "light" | "dark"
 * @param ADAPTER_COLLECTION_NAME = string
 * }
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
  IS_CLIENT_SIDE: typeof window !== "undefined",
  IS_SERVER_SIDE: typeof window === "undefined",
  IS_LOCAL_ENV: process.env.NODE_ENV === "development" ? true : false,
  USE_FIREBASE_EMULATOR: true,
  DEFAULT_THEME: "dark",
  ADAPTER_COLLECTION_NAME: "next_auth",
};

module.exports = nextConfig;
