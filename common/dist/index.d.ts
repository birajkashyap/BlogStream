import z from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: number;
    name?: string | undefined;
}, {
    email: string;
    password: number;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: number;
}, {
    email: string;
    password: number;
}>;
export declare const createPostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    authorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    authorId: string;
}, {
    title: string;
    content: string;
    authorId: string;
}>;
export declare const updatePostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
export type CreatePostInput = z.infer<typeof createPostInput>;
