import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // 支持的语言环境
  locales: ["en", "zh-CN"],

  // 默认语言环境
  defaultLocale: "zh-CN",

  // 默认语言环境不带有语言前缀
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
