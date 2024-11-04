import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com']
  }
};
export default nextConfig;
// next.config.js
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*', // Rota que você vai usar para chamar a API
//         destination: 'https://ds-catalog-api.onrender.com/api/:path*', // URL da API
//       },
//     ];
//   },
// };

