/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // {
      //   source: '/como-funciona',
      //   destination: 'http://localhost:3000/como-funciona',
      //   basePath: false,
      // },
    ]
  },
}

export default nextConfig
