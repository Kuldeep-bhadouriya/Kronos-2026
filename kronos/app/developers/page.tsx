import React from "react";
import Developer from "@/components/developer"; // '@/' points to root, adjust if needed
import Navbar from "@/components/Navbar";

const DeveloperPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
      <Navbar />
      <Developer />
    </main>
  );
};

export default DeveloperPage;
