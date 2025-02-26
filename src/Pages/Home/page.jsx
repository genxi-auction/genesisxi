import React from "react";
import Layout from "../../Layout/Layout";
import Congratualation from "../../Components/congratualation";
import { Link } from "react-router-dom";
import Landing_btn from "../../Components/landing_btn";
import useAuction from "../../context/AuctionContext";
import useScrolltoTop from "../../hook/useScrolltoTop";
import InfoModal from "../../Components/InfoModal";

const HomePage = () => {
  const { isAdmin } = useAuction();
  useScrolltoTop();
  return (
    <>
      <div className="py-auto">
        <div className="page-container">
          <div className="element z-[-1] absolute top-0 left-0 w-full h-full"></div>

          <div className="container f-col w-full  gap-[41px] my-auto">
            <p className="lg:text-[28px] text-[24px] bold text-center text-white text-shadow font-alte-haas-grotesk">
              {/* <span>Welcome to </span>

              <span>Genesis XI</span> */}
              <img
                src="/image/header.jpeg"
                alt="header"
                className="lg:max-w-[800px] max-w-[90vw] mx-auto"
              />
            </p>
            <div className="f-col w-full lg:gap-[23px] md:gap-[15px] gap-[10px]">
              {/* <Link to="/auction" className="landing-auction-box">
                <p class="landing-auction-box-text text-white ">
                  View Live Auction
                </p>
              </Link> */}
              <Landing_btn
                title={
                  <p className="text-white landing-auction-box-text ">
                    View Live Auction
                  </p>
                }
                link="/live-auction"
              />
              <Landing_btn
                title={
                  <p className="landing-auction-box-text text-light-blue">
                    View Upcoming Auctions
                  </p>
                }
                link="https://www.lazyapeofficial.com/genesisxi"
              />
              <Landing_btn
                title={
                  <p className="text-white landing-auction-box-text ">
                    Ended Auctions
                  </p>
                }
                link="/ended-auction"
              />
              {isAdmin && (
                <Landing_btn
                  title={
                    <p className="text-white landing-auction-box-text">
                      create auction
                    </p>
                  }
                  link="/admin/create-auction"
                />
              )}
              <img
                src="/image/footer.png"
                alt="footer"
                className="lg:max-w-[1000px] max-w-[90vw] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <InfoModal />
      {/* <Congratualation /> */}
    </>
  );
};

export default HomePage;
