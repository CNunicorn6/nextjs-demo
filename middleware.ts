import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // 默认语言环境不带有语言前缀
  matcher: ['/', '/(zh-CN|en)/:path*']
};