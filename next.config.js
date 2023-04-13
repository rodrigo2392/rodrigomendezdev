/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = withPWA({
    images: {
        domains: ["images.ctfassets.net"],
    },
    reactStrictMode: false,
});

module.exports = nextConfig;
