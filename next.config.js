const { default: next } = require("next");

/** @type {import('next').NextConfig} */
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
};

if (nextConfig.clientSide) {
  nextConfig.webConfig = {
    env: window.location.host.match("localhost") ? "dev" : "prod",
  };
}

module.exports = nextConfig;
