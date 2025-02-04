import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"; // Adjust the path if necessary
import { NavBar } from "../components/NavBar";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
  const { id } = useParams<{ id: string }>(); // Get blog ID from URL
  const { loading, post } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center items-center h-screen text-xl text-gray-500">
          <Spinner />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {/* Ensuring space below navbar */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            By{" "}
            <span className="font-semibold text-gray-700">
              {post.author.name}
            </span>
          </p>
          <hr className="my-4 border-gray-300" />
          <p className="text-lg text-gray-700 leading-relaxed">
            {post.content}
          </p>
        </div>
      </div>
    </>
  );
};
