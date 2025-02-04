import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.number().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.number().min(6),
});

export const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
});

export const updatePostInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
export type CreatePostInput = z.infer<typeof createPostInput>;

//why not to import from backend but to publish on npm?
//so that you don't have to install common libraries in backend also(like zod) otherwise how will you use safeParse
