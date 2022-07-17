/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  externalDir: true,
}

const withExportImages = require('next-export-optimize-images')
const withTM = require('next-transpile-modules')(['ti4-core']);

module.exports = withTM(withExportImages(nextConfig))
