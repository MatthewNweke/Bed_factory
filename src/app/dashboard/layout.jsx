'use client'

import React, { useState } from "react";
import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import DashboardContents from './DashboardContents';

const DashboardLayout = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex h-screen bg-[white] fixed top-0 bottom-0 w-[100%] z-50">
      <DashboardSidebar selectedItem={selectedItem} onItemClick={handleItemClick} />
      <DashboardContents selectedItem={selectedItem} />
    </div>
  );
};

export default DashboardLayout;
