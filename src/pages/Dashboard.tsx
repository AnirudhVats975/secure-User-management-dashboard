import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      window.location.href = '/signin';
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = '/signin';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Dashboard!</h1>
      <p className="text-lg text-gray-700 mb-6">
        You're now viewing the dashboard page. Feel free to explore and interact
        with the content.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
