import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import { ZodError } from "zod";
// Your own logic for dealing with plaintext password strings; be careful!

const loginByEmail = async (email: string, password: string) => {
  // 调用后端API登录接口
  //   const user = await fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   }).then((res) => res.json());

  return {
    id: "1",
    name: "Test User",
    email,
    password,
  };
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          // 请求后端API登录接口 获取tokenKey

          setTimeout(async () => {
            user = await loginByEmail(email, password);
          }, 4000);

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }

          // return user object with their profile data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            console.error(error.errors);
            throw error.errors;
          }
          // Return `null` to indicate that the credentials are invalid
          return null;
        }
      },
    }),
  ],
});
