import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./user";
import { blogRouter } from "./blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Variables: {
    userId: string;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/*", cors());

app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

export default app;

//postgresql://postgres:mysecretpassword@localhost:5432/postgres

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZWM2YzVjMmMtNWUyMi00ZGYwLTk2ZjQtODc4YjAxZjgyMGU5IiwidGVuYW50X2lkIjoiYTA5OGU4NjdiMTZlYTgxZTU4MmEyZmIyYzc5NzBkNzU4NDQzY2U1NTc2YjMwYmUwOTdjOTE1ZjIxY2VmODIyNCIsImludGVybmFsX3NlY3JldCI6IjNmYjg4Y2NkLWIyODItNDMzMS1iOWM2LTU5ODEzNGMxNGVhYiJ9.7aa2AwFF3THA9Pm0hwTsqMAlvMbD4FAyo-0rRV0SlKU"
