const AuctionCardSkeleton = () => {
  return (
    <div className="w-full bg-[#323232] rounded-lg shadow-lg overflow-hidden cursor-pointer font-alte-haas-grotesk animate-pulse">
      <div className="relative mt-0">
        {/* Image Skeleton */}
        <div className="w-full bg-gray-700 skeleton-loader"></div>

        {/* Status Badge Skeleton */}
        <div className="absolute flex items-center gap-2 px-3 py-1 text-sm font-bold rounded-full top-4 right-4">
          <div className="w-3 h-3 bg-gray-600 rounded-full lg:h-5 lg:w-5"></div>
          <div className="h-4 bg-gray-600 rounded w-14"></div>
        </div>
      </div>

      <div className="p-4">
        {/* Title Skeleton */}
        <div className="w-3/4 h-6 mb-2 bg-gray-600 rounded"></div>

        {/* Token ID Skeleton */}
        <div className="w-1/2 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default AuctionCardSkeleton;
