const Shimmer = () => {
    return (
      <div className="animate-pulse space-y-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-4 space-y-3">
            <div className="h-4 bg-gray-300 w-40 rounded"></div>
            <div className="h-4 bg-gray-300 w-32 rounded"></div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="h-6 bg-gray-300 w-24 rounded"></div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="h-6 bg-gray-300 w-16 rounded"></div>
          <div className="h-6 bg-gray-300 w-16 rounded"></div>
          <div className="h-6 bg-gray-300 w-16 rounded"></div>
        </div>
      </div>
    );
  };
  export default Shimmer;