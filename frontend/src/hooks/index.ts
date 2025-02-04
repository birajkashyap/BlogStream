import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}
interface SingleBlog {
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<SingleBlog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setPost(response.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, [id]);

  return {
    loading,
    post,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setPosts(response.data.AllBlogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    posts,
  };
};
