/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    optimizePackageImports: ["@splinetool/react-spline", "react-icons"],
    serverComponentsExternalPackages: ["@libsql/client"],
    useWasmBinary: true,
    outputFileTracingExcludes: ["**/*.splinecode", "**/sqlite.db"],
    esmExternals: true,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 20,
          },
          reactIcons: {
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            name: "react-icons",
            chunks: "all",
            priority: 15,
          },
          spline: {
            test: /[\\/]node_modules[\\/]@splinetool[\\/]/,
            name: "spline",
            chunks: "all",
            priority: 15,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
            enforce: true,
          },
        },
      },
    };

    return config;
  },
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  poweredByHeader: false,
  excludeDefaultMomentLocales: true,
};

module.exports = nextConfig;
