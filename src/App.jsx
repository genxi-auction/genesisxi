import HomePage from "./Pages/Home/page";
import AuctionDetail from "./Pages/nft-detail";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./Pages/page_not_found";
import CreateAuction from "./Pages/admin";
import LiveAuction from "./Pages/live_auction";
import useAuction from "./context/AuctionContext";
import Layout from "./Layout/Layout";

const App = () => {
  const { isAdmin } = useAuction();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/live-auction/:id",
          element: <AuctionDetail />,
        },
        {
          path: "/upcoming-auction/:id",
          element: <AuctionDetail />,
        },
        {
          path: "/sold-auction/:id",
          element: <AuctionDetail />,
        },
        {
          path: "/live-auction",
          element: <LiveAuction isLive={true} />,
        },
        {
          path: "/ended-auction",
          element: <LiveAuction isLive={false} />,
        },

        {
          path: "/admin/create-auction",
          element: isAdmin ? <CreateAuction /> : <Navigate to="/" />,
        },
      ],
    },

    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
