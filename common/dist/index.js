"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.number().min(6),
    name: zod_1.default.string().optional(),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.number().min(6),
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    authorId: zod_1.default.string(),
});
exports.updatePostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string(),
});
//why not to import from backend but to publish on npm?
//so that you don't have to install common libraries in backend also(like zod) otherwise how will you use safeParse
