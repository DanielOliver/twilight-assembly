/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages(nextConfig)
