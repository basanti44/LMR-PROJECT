import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-4 bg-blue-700 text-white shadow-lg sticky top-0 z-50">

        <h1 className="text-4xl font-extrabold tracking-widest text-white">
          Learning Management System 
        </h1>

        <ul className="flex gap-6">

          <li>
            <Link to="/" className="hover:text-cyan-300 transition duration-300">Home</Link>
          </li>

          <li>
            <Link to="/courses" className="hover:text-cyan-300 transition duration-300">Courses</Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-cyan-300 transition duration-300">Login</Link>
          </li>

          <li>
            <Link to="/register" className="hover:text-cyan-300 transition duration-300">Register</Link>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}

      <div className="text-center mt-24">

        <h1 className="text-6xl font-extrabold text-blue-700 leading-tight drop-shadow-lg">
          Learn Mearn Stack <br /> Easily
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Build real-world skills with online courses
        </p>

        <Link to="/login">

          <button className="mt-8 bg-blue-600 hover:bg-cyan-500 hover:scale-105 transition duration-300 text-white px-8 py-3 rounded-2xl shadow-xl font-bold">
            Get Started
          </button>

        </Link>

      </div>

      {/* Courses Section */}

      <div className="grid grid-cols-3 gap-8  mt-16">

        {/* React Course */}

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 min-h-[250px]">

          <div className="text-5xl mb-4">⚛️</div>

          <h2 className="text-3xl font-extrabold text-blue-700 mt-4">
            React Course
          </h2>

          <p className="mt-3 text-gray-600">
            Learn React from beginner to advanced.
          </p>

          <Link to="/login">

            <button className="mt-6 bg-blue-600  hover:bg-blue-500 text-white px-6 py-3 rounded-2xl  shadow-xl hover:scale-105 transition duration-300 font-semibold">
              Enroll Now
            </button>

          </Link>

        </div>

        {/* Node Course */}

        <div className="bg-white p-6 rounded-3xl shadow-xg hover:scale-105 hover:shadow-2xl transition duration-300 min-h-[250px]">
          <div className="text-5xl mb-4">🟢</div>
          <h2 className="text-3xl font-extrabold text-blue-700 mt-4">
            Node.js Course
          </h2>

          <p className="mt-3 text-gray-600">
            Build backend with Node and Express.
          </p>

          <Link to="/login">

            <button className="mt-6 bg-blue-700 hover:bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition duration-300 font-semibold">
              Enroll Now
            </button>

          </Link>

        </div>

        {/* MongoDB Course */}

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300  min-h-[250px]">

          <div className="text-5xl mb-4">🍃</div>

          <h2 className="text-3xl font-extrabold text-blue-700 mt-4">
            MongoDB Course
          </h2>

          <p className="mt-3 text-gray-600">
            Learn database management with MongoDB.
          </p>

          <Link to="/login">

            <button className="mt-6 bg-blue-700 hover:bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition duration-300 font-semibold">
              Enroll Now
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;