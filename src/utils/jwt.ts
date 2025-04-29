// src/utils/jwt.ts
import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET === "undefined") {
  throw new Error("JWT_SECRET is missing in .env file");
}

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export const signToken = (payload: string | object): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
