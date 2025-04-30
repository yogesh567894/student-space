/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Add resolve fallback for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Add resolve aliases
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    // Optimize module resolution
    config.resolve.modules = ["node_modules", ...config.resolve.modules];

    return config;
  },
  transpilePackages: ["lucide-react", "vaul"],
};

module.exports = nextConfig;
