import React from 'react';

const DashboardContents = ({ selectedItem }) => {
  // Sample content for demonstration
  const contents = {
    Dashboard: <div>Dashboard Content</div>,
    Products: <div>Products</div>,
    Categories: <div>Categories</div>,
    Customers: <div>Customers</div>,
    Orders: <div>Orders</div>,
    Coupon: <div>Coupon</div>,
    Staff: <div>Staff</div>,
    Settings: <div>Settings Content</div>
  };

  return  <div className="flex-1 p-8 min-h-[100vh] fixed w-[75%] bg-[white] top-0 bottom-0 right-0 z-50">{contents[selectedItem]}</div>;
};

export default DashboardContents;
