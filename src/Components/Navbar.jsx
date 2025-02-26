import { useAppKit } from "@reown/appkit/react";
import React from "react";
import { useAccount } from "wagmi";
const Navbar = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const handleOpen = () => {
    alert("open");
    // open();
  };
  return (
    <div className="bg-[#141a19]">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold text-green-500">Auction Live Now</h1>
        <nav className="flex space-x-3 uppercase">
          <button className="px-4 py-2 text-white rounded">HOME</button>
          {isConnected ? (
            <button
              className="px-4 py-2 text-white rounded"
              onClick={handleOpen}>
              disconnect
            </button>
          ) : (
            <button
              type="button"
              className="px-4 py-2 text-white rounded"
              onClick={handleOpen}>
              CONNECT
            </button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
