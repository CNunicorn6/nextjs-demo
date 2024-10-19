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
          const { email, password } = await signInSchema
            .parseAsync(credentials)
            .catch((error) => {
              console.error(error.errors);
              throw new Error(error.errors[0].message);
            });
          // 请求后端API登录接口 获取tokenKey

          user = await loginByEmail(email, password);

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
            if (error.errors.length) {
              throw new Error(error.errors[0].message);
            }
          }
          // Return `null` to indicate that the credentials are invalid
          throw new Error("Invalid credentials" + error);
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // 这里可以添加自定义的登录逻辑
      console.log('signIn', user, account, profile, email, credentials)
      return true;
    },
    async jwt({ token, user, account, profile }) {
      // 这里可以添加自定义的jwt逻辑
      console.log('jwt', token, user, account, profile)
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect url', url)
      console.log('redirect url', baseUrl)
      // 处理重定向逻辑
      return url;
    },
  },
});
