import { BlogCard } from "../components/BlogCard";
import { NavBar } from "../components/NavBar";
import { useBlogs } from "../hooks";
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {
  const placeholderPosts = Array.from({ length: 6 }); // Render 6 skeleton cards
  const { loading, posts } = useBlogs();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {" "}
      {/* Subtle background */}
      <NavBar />
      <div className="container mx-auto px-4 mt-20">
        {" "}
        {/* Adjust spacing */}
        <h1 className="m-4 text-6xl font-bold text-center mb-8 text-gray-800">
          New Blogs
        </h1>
        <div className="m-3 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? placeholderPosts.map((_, index) => <Skeleton key={index} />)
            : posts.map((post, index) => (
                <BlogCard
                  id={post.id}
                  key={index}
                  authorName={post.author.name}
                  title={post.title}
                  description={post.content}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
