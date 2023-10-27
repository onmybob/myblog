/** @type {import('next').NextConfig} */
const rewrites = async () => {
    return [
        {
            source: "/api/:slug*",
            destination: "https://www.bobjoy.com/api/:slug*",
        },
    ];
};


const nextConfig = { rewrites,  trailingSlash: true,
};

module.exports = nextConfig;
