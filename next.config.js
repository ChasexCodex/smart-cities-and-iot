/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'hbku.edu.qa',
      'links.papareact.com',
      'cdn.sanity.io',
    ]
  }
}
