"use client";

const SkeletonLoader = () => {
  return (
    <div className="max-w-xs shadow-md rounded-lg overflow-hidden bg-slate-200 p-1 animate-pulse">
      <div className="p-2">
        <div className="flex items-center gap-1">
          <div className="bg-gray-400 rounded-full h-8 w-8"></div>
          <div className="bg-gray-400 h-5 w-32 rounded"></div>
        </div>
      </div>
      <div className="bg-gray-400 h-48 w-full"></div>
      <div className="px-2 py-4">
        <div className="flex items-center gap-1">
          <div className="bg-gray-400 rounded-full h-5 w-5"></div>
          <div className="bg-gray-400 h-5 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
