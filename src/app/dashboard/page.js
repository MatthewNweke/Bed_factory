"use client";
import { useState } from "react";
import DashboardLayout from "./layout";
import DashboardSidebar from "@/components/sidebar/DashboardSidebar";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    setMessage("Welcome to the Dashboard!");
  };

  return (
    <div className="">
      <DashboardLayout disableGlobalLayout={true}>
        <DashboardSidebar />
        <div>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <button
            onClick={showMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Show Message
          </button>
          <div className="mt-4">{message}</div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
