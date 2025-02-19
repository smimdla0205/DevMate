import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
    @use "@/styles/colors.scss" as *;
    @use "@/styles/mixin.scss" as *;
  `,
  },
};
export default nextConfig;
