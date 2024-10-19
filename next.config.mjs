import createNextIntlPlugin from "next-intl/plugin";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// 加载环境变量 根据 TARGET 环境变量加载对应的环境变量文件
const envFile = path.join(process.cwd(), "env", `.env.${process.env.TARGET || 'local'}`);
if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
}

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/not-found",
        destination: "/404",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
