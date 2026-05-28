import { useState } from "react";

function Profile() {

  const [user] = useState({
    name: "Basanti Kumari",
    email: "basanti@gmail.com",
    progress: "70%",
    joined: "12 May 2026",
    photo: "/myphotoes.jpeg",
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl shadow-2xl p-10">

        {/* Top Section */}
        <div className="flex items-center gap-8">

          {/* Profile Image */}
          <img
            src={user.photo}
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-cyan-400"
          />

          {/* User Info */}
          <div>
            <h1 className="text-5xl font-bold text-cyan-400">
              {user.name}
            </h1>

            <p className="text-gray-300 mt-3 text-lg">
              {user.email}
            </p>

            <p className="text-gray-400 mt-2">
              Joined: {user.joined}
            </p>
          </div>

        </div>

        {/* Progress Section */}
        <div className="mt-12">

          <h2 className="text-3xl font-semibold mb-5 text-green-400">
            Course Progress
          </h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-6">

            <div
              className="bg-cyan-400 h-6 rounded-full"
              style={{ width: user.progress }}
            ></div>

          </div>

          <p className="mt-3 text-xl">
            {user.progress} Completed
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="bg-gray-700 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-cyan-400">3</h2>
            <p className="mt-2">Total Courses</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-green-400">1</h2>
            <p className="mt-2">Completed</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-red-400">2</h2>
            <p className="mt-2">Pending</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;