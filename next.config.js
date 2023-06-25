// @ts-check
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
