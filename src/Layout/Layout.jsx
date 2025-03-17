import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { formatAddress, isNotEmptyString } from "../helpers/helper";
import ConnectWallet from "../Components/connectWalletComp/connectWallet";
import CommonBtn from "../Components/Button/CommonBtn";
import useAuction from "../context/AuctionContext";
import axios from "axios";
import CountDownTimmer from "../Components/CountDown/CountDownTimmer";
import { formatEther } from "viem";

const Layout = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const [isAuctionLive, setIsAuctionLive] = useState(false);
  const [EndedAuctions, setEndedAuctions] = useState(false);
  const [isEndedAuctionsLoading, setIsEndedAuctionsLoading] = useState(true);

  const {
    upcomingAuctions,
    setIsRefetchUpcomingAuctions,
    isRefetchUpcomingAuctions,
    getEndedAuctions,
    isEndRefetch,
    isAnyAuctionLive,
    isAnyAuctionUpcoming,
  } = useAuction();
  const [timeLeft, setTimeLeft] = useState("");

  const [upcomingAuction, setUpcomingAuction] = useState(null);
  const handleOpen = () => {
    open();
  };

  return (
    <div className="min-h-screen">
      <header className="container flex justify-between items-center bg-transparent lg:pt-[2.875rem] md:pt-[2.5rem] pt-[1.5rem] lg:pl-[76px] md:pl-[37px] pl-[12px] lg:pr-[37px] md:pr-[15px] pr-[12px] relative">
        <div className="flex items-center gap-1 lg:gap-3 md:gap-2 md:tracking-normal sm:tracking-tighter">
          <span
            className={`lg-text bold ${
              isAnyAuctionLive ? "text-lighter-green" : "text-red"
            } font-alte-haas-grotesk text-nowrap `}>
            {isAnyAuctionLive ? "Auction Live Now" : "See upcoming auctions"}
          </span>

          <div
            className={`lg:w-[1.875rem] lg:h-[1.875rem] md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem] rounded-full ${
              isAnyAuctionLive
                ? "bg-lighter-green border-light-green"
                : "bg-red border-red/40"
            } border  flex-center relative`}>
            <div
              className={`lg:w-[1.25rem] lg:h-[1.25rem] md:w-[1rem] md:h-[1rem] w-[0.65rem] h-[0.65rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                isAnyAuctionLive ? "bg-light-green" : "bg-[#daa47262]"
              }`}></div>
          </div>
        </div>

        {/* {!isAuctionLive && isNotEmptyString(timeLeft) && (
          <div className="absolute text-center text-white -translate-x-1/2 lg:relative lg:top-auto top-full lg:left-auto left-1/2 lg:translate-x-0 lg:mt-0 mt-7">
            <p className="text-white lg-text bold font-alte-haas-grotesk">
              Next Auction
            </p>
            <p class="lg-text text-center text-white font-dela-gothic-one tracking-[0.4rem]">
              {timeLeft}
            </p>
          </div>
        )} */}

        <div className="flex items-center gap-3 lg:gap-6 md:gap-4 font-montserrat">
          <Link to="/" className="text-white cursor-pointer base-text bold ">
            HOME
          </Link>

          <ConnectWallet
            component={
              <CommonBtn
                className="connect-btn"
                text={formatAddress(address)}
                handleClick={handleOpen}
                loading={false}
              />
            }
            walletButtonClassName="connect-btn"
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

{
  /* <div class="w-[4034px] h-[650px] bg-[#3fc6af]/[0.83]"></div> */
}

// <footer className="max-w-[992px] -translate-y-[114px] w-full mx-auto  md:h-[665px] px-2 h-fit">
// <div class="w-full h-full rounded-[5px] bg-[#121212]/[0.66] md:py-5 py-3 lg:px-[60px] md:px-[30px] px-[15px] lg:pb-[163px] md:pb-[100px] pb-[50px] ">
//   <div className="f-col lg:gap-[2rem] md:gap-[1.5rem] gap-[1rem] h-full">
//     {/* footer heading start */}
//     <p class="xl-text  text-center text-white font-dela-gothic-one">
//       PREVIOUS AUCTIONS
//     </p>
//     {/* footer heading end */}

//     {/* footer table start */}
//     <div className="h-full f-col">
//       <table className="w-full h-full border-collapse table-fixed f-col ">
//         <thead>
//           {/* footer header start*/}
//           <tr className="flex items-center justify-around w-full overflow-x-auto overflow-y-hidden h-fit md:border-b md:border-white footer-table-body-row-padding">
//             <td className="footer-table-header-cell">Name</td>
//             <td className="footer-table-header-cell">Token id</td>
//             <td className="footer-table-header-cell">sold for</td>
//             <td className="footer-table-header-cell">winner</td>
//           </tr>
//         </thead>
//         {/* footer header end*/}
//         {/* footer body start*/}
//         {isEndedAuctionsLoading ? (
//           <div className="animate-pulse">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-4 border-b border-gray-300">
//                     <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
//                   </th>
//                   <th className="p-4 border-b border-gray-300">
//                     <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
//                   </th>
//                   <th className="p-4 border-b border-gray-300">
//                     <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
//                   </th>
//                   <th className="p-4 border-b border-gray-300">
//                     <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <tr key={index} className="bg-white">
//                     <td className="p-4 border-b border-gray-300">
//                       <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
//                     </td>
//                     <td className="p-4 border-b border-gray-300">
//                       <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
//                     </td>
//                     <td className="p-4 border-b border-gray-300">
//                       <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
//                     </td>
//                     <td className="p-4 border-b border-gray-300">
//                       <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <>
//             <tbody className="w-full h-full f-col ">
//               {EndedAuctions?.map((item, index) => (
//                 <tr className="flex items-start justify-around w-full overflow-x-auto overflow-y-hidden transition-all duration-300 h-fit md:border-b md:border-white hover:bg-white/10 footer-table-body-row-padding">
//                   <td className="footer-table-text-light-blue footer-table-body-cell">
//                     {item?.name?.split("#")[0]}
//                   </td>
//                   <td className="footer-table-text-white footer-table-body-cell text-nowrap">
//                     #{Number(item?.tokenId)}
//                   </td>
//                   <td className="footer-table-text-white footer-table-body-cell text-nowrap">
//                     {item?.bids?.length > 0
//                       ? `${formatEther(
//                           item?.bids?.reduce((max, current) => {
//                             return current.amount > max.amount
//                               ? current
//                               : max;
//                           }, item?.bids[0])?.amount
//                         )} eth`
//                       : "0"}
//                   </td>
//                   <td className="footer-table-text-light-blue footer-table-body-cell text-nowrap">
//                     {item?.bids?.length > 0
//                       ? formatAddress(
//                           item?.bids?.reduce((max, current) => {
//                             return current.amount > max.amount
//                               ? current
//                               : max;
//                           }, item?.bids[0])?.bidder
//                         )
//                       : "0"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </>
//         )}

//         {/* footer body end*/}

//         {/* <div className="footer-table-col-container">
//           <div className="footer-table-body">
//             <span className="footer-table-text-light-blue">The</span>
//             <span className="footer-table-text-light-blue">Trippy</span>
//             <span className="footer-table-text-light-blue">Bunny</span>
//           </div>
//         </div> */}
//         {/* <div className="footer-table-col-container">
//           <div className="footer-table-body">
//             <span className="footer-table-text-white">#9</span>
//             <span className="footer-table-text-white">#8</span>
//             <span className="footer-table-text-white">#7</span>
//           </div>
//         </div>
//         <div className="footer-table-col-container">
//           <div className="footer-table-body">
//             <span className="footer-table-text-white">3.0 eth</span>
//             <span className="footer-table-text-white">1.7 eth</span>
//             <span className="footer-table-text-white">2.8 eth</span>
//           </div>
//         </div>
//         <div className="footer-table-col-container">
//           <div className="border-none footer-table-body">
//             <span className="footer-table-text-light-blue">
//               0x23482...
//             </span>
//             <span className="footer-table-text-light-blue">
//               0x23482...
//             </span>
//             <span className="footer-table-text-light-blue">
//               0x23482...
//             </span>
//           </div>
//         </div> */}
//       </table>
//     </div>
//     {/* footer table end */}
//   </div>
// </div>
// </footer>
