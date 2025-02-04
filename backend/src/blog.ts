import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@birajkashyap/medium-common";

export const blogRouter = new Hono<{
  Variables: {
    userId: string;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  try {
    const jwt = c.req.header("Authorization") || "";
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("userId", payload.id as string);
    await next();
  } catch (e) {
    return c.text("You are not logged in");
  }
});

blogRouter.post("/create", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userId = c.get("userId");
  const body = await c.req.json();
  const checkObj = Object.assign(body, { authorId: userId });
  const { success } = createPostInput.safeParse(checkObj);
  if (!success) {
    c.status(403);
    return c.text("Invalid body");
  }

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (e) {
    return c.text("error while creating post");
  }
});
blogRouter.put("/update", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userId = c.get("userId");
  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.text("Invalid body");
  }

  try {
    const post = await prisma.post.update({
      where: {
        id: body.id, //use the id of the post
        //authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      id: post.id,
    });
  } catch (e) {
    return c.text("error while updating");
  }
});

//pagination should be applied ideally to get say 10 blogs at a time(to load in a page)
blogRouter.get("/bulk", async (c) => {
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const allBlogs = await prisma.post.findMany({
    select: {
      title: true,
      content: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json({
    AllBlogs: allBlogs,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const reqBlog = await prisma.post.findUnique({
      where: {
        id: id,
        authorId: authorId,
      },
      select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog: reqBlog,
    });
  } catch (e) {
    c.status(404);
    return c.text("Error while fetching the blog");
  }
});

//blog id:340bce19-51c8-4002-8ef6-752bb8ea2cc7
//authorId-"faac8800-37cb-4e25-b58b-47362f698084"

//deployment url-https://backend.kashyapbiraj83.workers.dev/
