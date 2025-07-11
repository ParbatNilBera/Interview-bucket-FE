import React from "react";

const SkaletonLoader = () => {
  return (
    <>
      <div role="status" className="animate-pulse space-y-4 max-w-3xl">
        <div className="h-6 bg-gray-200 rounded-md w-1/2 dark:bg-gray-700"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
          <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
          <div className="h-2.5 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      <div className="animate-pulse space-y-4 max-w-3xl mt-10">
        <div className="h-4 bg-gray-200 rounded-md w-1/2 dark:bg-gray-700"></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
          <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
        </div>

        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2 mt-8 "></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>
      </div>
    </>
  );
};

export default SkaletonLoader;
