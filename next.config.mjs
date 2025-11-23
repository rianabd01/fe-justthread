/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  distDir: "./dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  typescript: {
    ignoreBuildErrors: true, // remove if ts was proper
  },
};

export default nextConfig;
