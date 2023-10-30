/** @type {import('next').NextConfig} */
const rewrites = async () => {
    return [
        {
            source: "/api/:slug*",
            destination: "https://www.bobjoy.com/api/:slug*",
        },
    ];
};


const nextConfig = { rewrites,  trailingSlash: true,images: {
  domains: ["qiniu.bobjoy.com"],
},};


const nextConfig2 = {
    experimental: {
      serverActions: true,
    },
  };
  

module.exports = nextConfig;
