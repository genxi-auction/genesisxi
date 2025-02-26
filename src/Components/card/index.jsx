import React from "react";
import { Link, useLocation } from "react-router-dom";
import auctionImage from "../../assets/27-new-1.png";
const Card = ({ item, isLive }) => {
  const ipfsUrl = item?.image?.replace("ipfs://", "https://ipfs.io/ipfs/");
  const location = useLocation();
  const isLiveAuction = location.pathname === "/live-auction";

  const [isLoading, setIsLoading] = React.useState(true); // Added state for loading

  // Function to handle image load
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when image loads
  };
  return (
    <Link
      to={
        item?.status === 2 || item?.status === 3 || item?.status === 4
          ? `/sold-auction/${item?.tokenId}`
          : isLive
          ? `/live-auction/${item?.tokenId}`
          : `/upcoming-auction/${item?.tokenId}`
      }
      className="w-full bg-[#323232] rounded-lg shadow-lg overflow-hidden cursor-pointer font-alte-haas-grotesk">
      <div className="relative mt-0">
        <picture className="block">
          {isLoading && ( // Show loading effect while loading
            <div className="absolute top-0 left-0 w-full skeleton-loader"></div> // Skeleton loader
          )}

          <source srcSet={ipfsUrl} type="image/webp" />
          <source srcSet={ipfsUrl} type="image/png" />
          <img
            loading="lazy"
            src={ipfsUrl}
            data-src={ipfsUrl}
            alt="user-img"
            className="object-cover object-top w-full"
            onLoad={handleImageLoad} // Added onLoad event
          />
        </picture>
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2`}>
          <div
            className={`${
              isLiveAuction ? "bg-green" : "bg-red"
            } lg:h-5 lg:w-5 h-3 w-3 rounded-full`}></div>
          <p className="font-light text-white capitalize base-text">
            {Number(item?.status) === 2
              ? "sold"
              : Number(item?.status) === 4
              ? "cancelled"
              : isLiveAuction
              ? "Live"
              : "Upcoming"}
          </p>
        </div>
      </div>

      {/* <div className="p-4">
        <h3 className="mb-2 text-white xl-text bold">
          {item?.name?.split("#")[0]}
        </h3>
        <p className="text-gray-300 sm-text">
          Token ID: #{item?.name?.split("#")[1]}
        </p>
      </div> */}
    </Link>
  );
};

export default Card;
