import { auth } from "@/auth";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default auth(async function middleware(req: NextRequest) {
  return handleI18nRouting(req);
});
