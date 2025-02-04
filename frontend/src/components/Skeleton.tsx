export const Skeleton = () => {
  return (
    <div className="max-w-md rounded-lg shadow-md overflow-hidden animate-pulse bg-gray-100">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="p-6">
        {/* Tag Placeholder */}
        <div className="h-4 w-20 bg-gray-300 rounded-full mb-4"></div>

        {/* Title Placeholder */}
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>

        {/* Description Placeholder */}
        <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

        {/* Author Details Placeholder */}
        <div className="flex items-center mt-4">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-3 space-y-2">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
