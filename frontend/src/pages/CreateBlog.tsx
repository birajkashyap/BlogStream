import { NavBar } from "../components/NavBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />

      <div className="min-h-screen flex justify-center w-full pt-20 bg-gray-50">
        <div className="max-w-screen-lg w-full">
          {/* Title input (not form-like, more like text area) */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full text-gray-900 text-4xl font-semibold focus:outline-none p-2"
            placeholder="Blog Title"
          />

          {/* Text Editor for content */}
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          {/* Publish Button */}
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog/create`,
                {
                  title: title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-6 inline-flex items-center px-6 py-3 text-lg font-medium text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg focus:ring-4 focus:ring-blue-200 "
          >
            Create a blog
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom Text Editor component
function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-6">
      <div className="w-full mb-4">
        <div className="flex items-center justify-between border-b">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Blog Content</label>
            <textarea
              onChange={onChange}
              id="editor"
              rows={8}
              className="focus:outline-none block w-full px-2 py-4 text-lg text-gray-900 bg-white border-0 resize-none"
              placeholder="Write your blog post here..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
