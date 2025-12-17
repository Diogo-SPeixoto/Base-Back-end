import { CookieSerializeOptions } from "@fastify/cookie"

export const optionsAccessToken: CookieSerializeOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 15,
  signed: true,
}

export const optionsRefreshToken: CookieSerializeOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 60 * 24 * 3,
  signed: true,
}

export const accessTokenExpires ="15m"
export const refreshTokenExpires ="3d"