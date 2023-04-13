/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["images.ctfassets.net"],
    },
    serverRuntimeConfig: {
        env: {
            CONTENTFUL_SPACE_ID: "5cf43m32smvd",
            CONTENTFUL_ACCESS_TOKEN:
                "daum1Tg0k_Dv8sF2ERz6CkIVVTYOkgDS3iQtseex0Z0",
            CONTENTFUL_ENVIRONMENT: "master",
        },
    },
    publicRuntimeConfig: {
        env: {
            CONTENTFUL_SPACE_ID: "5cf43m32smvd",
            CONTENTFUL_ACCESS_TOKEN:
                "daum1Tg0k_Dv8sF2ERz6CkIVVTYOkgDS3iQtseex0Z0",
            CONTENTFUL_ENVIRONMENT: "master",
        },
    },
};

module.exports = nextConfig;
