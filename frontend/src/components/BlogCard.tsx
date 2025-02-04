import { Link } from "react-router-dom";

interface BlogCardType {
  id: string;
  title: string;
  description: string;
  imgSrc?: string;
  topic?: string;
  avatarImg?: string;
  authorName: string;
  date?: string;
}

export const BlogCard = ({
  id,
  topic,
  authorName,
  title,
  description,
  imgSrc,
  avatarImg,
  date,
}: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="max-w-md text-black rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-300 cursor-pointer">
        {/* Image Section */}
        <img
          className="w-full h-48 object-cover"
          src={
            imgSrc ||
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/02/29031558/Bergen.jpg"
          } // Replace with your image URL
          alt="Article"
        />

        <div className="p-6">
          {/* Tag */}
          <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-4">
            {topic || "Blog"}
          </span>

          {/* Title */}

          <h5 className="text-2xl font-bold mb-2 hover:text-blue-600">
            {title}
          </h5>

          {/* Description */}
          <p className="text-gray-400 mb-4">
            {description.slice(0, 100) + "..."}
          </p>

          {/* Author Details */}
          <div className="flex items-center mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src={
                avatarImg ||
                "data:image/jpeg;base64,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"
              } // Replace with author's image URL
              alt="Author"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">{authorName}</p>
              <p className="text-sm text-gray-400">
                {date || "8th Jan, 2025"} •{" "}
                {Math.ceil(description.length / 100)} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
