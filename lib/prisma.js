// lib/prisma.js
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Optional: logs queries to console
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
