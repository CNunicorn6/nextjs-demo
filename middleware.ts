/**
 * 中间件函数，用于处理国际化路由。
 * 
 * @param {NextRequest} req - 传入的请求对象。
 * @returns {Promise<Response>} 返回处理后的响应对象。
 * 
 * @fileoverview
 * 该文件定义了一个中间件函数，使用 `next-intl` 库处理国际化路由，并结合 `auth` 进行身份验证。
 * 
 * @module middleware
 */
import { auth } from "@/auth";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

async function middleware(req: NextRequest) {
  try {
    return await handleI18nRouting(req);
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect('/error');
  }
}

export default auth(middleware);

export const config = {
  matcher: [
  //   // Skip all internal paths (_next)
    '/((?!_next).*)',
  //   // Optional: only run on root (/) URL
  //   // '/'
  ],
}