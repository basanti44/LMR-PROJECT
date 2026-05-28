import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {

  const navigate = useNavigate();

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Logout Function
  const handleLogout = () => {

    localStorage.removeItem("login");

    navigate("/login");
  };

  return (

    <div
      className={`flex flex-col md:flex-row min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-blue-50"
      }`}
    >

      {/* Sidebar */}

      <div className="w-full md:w-64  p-4 md:p-8 min-h-screen bg-gradient-to-b from-blue-700 to-cyan-400 text-white p-8">

        <h1 className="text-5xl font-bold mb-12">
          LMS
        </h1>

        <ul className="space-y-4 md:space-y-8 text-lg md:text-2xl">

          {/* Dashboard */} 

          <li>
            <Link
              to="/dashboard"
              className="hover:text-yellow-300"
            >
              Dashboard
            </Link>
          </li>

          {/* Courses */}

          <li>
            <Link
              to="/courses"
              className="hover:text-yellow-300"
            >
              My Courses
            </Link>
          </li>

          {/* Quiz */}

          <li>
            <Link
              to="/quiz"
              className="hover:text-yellow-300"
            >
              Quiz
            </Link>
          </li>

          {/* Profile */}

          <li>
            <Link
              to="/profile"
              className="hover:text-yellow-300"
            >
              Profile
            </Link>
          </li>

          {/* Dark Mode */}

          <li
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-yellow-300 cursor-pointer"
          >
            Dark Mode
          </li>

          {/* Settings */}

          <li
            onClick={() => navigate("/Settings ")}
            className="hover:text-yellow-300 cursor-pointer"
          >
            Settings
          </li>

          {/* Logout */}

          <li
            onClick={handleLogout}
            className="hover:text-yellow-300 cursor-pointer"
          >
            Logout
          </li>

        </ul>

      </div>

      {/* Main Content */}

      <div className="flex-1 p-4 md:p-10 overflow-x-hidden">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Student Dashboard
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10 text-xl">
          Welcome to LMS Dashboard
        </p>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          <div className="bg-white text-black p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold text-blue-700">
              Total Courses
            </h2>

            <p className="text-6xl font-bold mt-6">
              3
            </p>

          </div>

          <div className="bg-white text-black p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold text-green-700">
              Completed
            </h2>

            <p className="text-6xl font-bold mt-6">
              1
            </p>

          </div>

          <div className="bg-white text-black p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold text-red-500">
              Pending
            </h2>

            <p className="text-6xl font-bold mt-6">
              2
            </p>

          </div>

        </div>

        {/* Courses */}

        <h1 className="text-5xl font-bold text-blue-700 mb-8">
          My Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* React */}

          <div className="bg-white text-black p-8 rounded-2xl shadow-lg">

            <h2 className="text-4xl font-bold text-blue-600">
              React Course
            </h2>

            <p className="mt-4 text-gray-600 text-xl">
              Progress: 70%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

              <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>

            </div>

            <button
              onClick={() => navigate("/courses")}
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
            >
              Continue Learning
            </button>

          </div>

          {/* Node */}

          <div className="bg-white text-black p-8 rounded-2xl shadow-lg">

            <h2 className="text-4xl font-bold text-green-600">
              Node.js Course
            </h2>

            <p className="mt-4 text-gray-600 text-xl">
              Progress: 40%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

              <div className="bg-green-500 h-4 rounded-full w-[40%]"></div>

            </div>

            <button
              onClick={() => navigate("/courses")}
              className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600"
            >
              Continue Learning
            </button>

          </div>

        </div>

        {/* Certificate */}

        <button
          onClick={() => navigate("/certificate")}
          className="mt-10 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600"
        >
          Download Certificate
        </button>

      </div>

    </div>

  );
}

export default Dashboard;