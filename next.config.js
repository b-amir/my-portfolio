/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    optimizePackageImports: ["@splinetool/react-spline", "react-icons"],
  },
  serverExternalPackages: ["@libsql/client"],
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now()
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

  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  poweredByHeader: false,
  excludeDefaultMomentLocales: true,
};

module.exports = nextConfig;
