import React, { useEffect, useState } from "react";
import Dashboardpage from "./DashboardPage";
import ProductsPage from "./productsPage";
const DashboardContents = ({ selectedItem }) => {
  // Sample content for demonstration
  const contents = {
    Dashboard: (
      <Dashboardpage/>
    ),
    Products: <ProductsPage/>,
    Categories: <div>Categories</div>,
    Customers: <div>Customers</div>,
    Orders: <div>Orders</div>,
    Coupon: <div>Coupon</div>,
    Staff: <div>Staff</div>,
    Settings: <div>Settings Content</div>,
    "Log out": <div>Log Out</div>,
  };

  // State to hold the content based on the selected item
  const [content, setContent] = useState(null);

  // Update content whenever selectedItem changes
  useEffect(() => {
    setContent(contents[selectedItem]);
  }, [selectedItem, contents]);

  return (
    <div className="flex-1 p-8 min-h-[100vh] fixed min-w-[80%] bg-[white] top-0 bottom-0 right-0 z-50">
      {/* Conditional rendering based on content availability */}
      {content && (
        <>
          <div className="shadow-xl border justify-between absolute border-l-none top-0 flex items-center px-5 w-[100%] left-0 h-[10vh] mb-20">
            {/* Hamburger menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6   cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                className="hamburger-menu"
              />
            </svg>

            <div className="flex items-center  gap-16 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-sun cursor-pointer"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-bell cursor-pointer"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </div>
          </div>
          <div className="mt-20 w-[100%]  ">{content}</div>
        </>
      )}
    </div>
  );
};

export default DashboardContents;
