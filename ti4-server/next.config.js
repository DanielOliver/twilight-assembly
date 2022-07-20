/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
}

const withTM = require('next-transpile-modules')(['ti4-core']);

module.exports = nextConfig
