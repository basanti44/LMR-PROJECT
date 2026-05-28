import { useState } from "react";

function Settings() {

  const [dark, setDark] = useState(true);

  // Username
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "Basanti Kumari");

  // About
  const showAbout = () => {
    alert("LMS Project using MERN Stack 🚀");
  };

  // Reset
  const resetProgress = () => {
    alert("Progress Reset Successful");
  };

  // Change Username
  const changeUsername = () => {

    const newName = prompt("Enter New Username");

    if (newName) {
      localStorage.setItem("username", newName);
      setUsername(newName);
    }
  };

  return (

    <div
      className={
        dark
          ? "min-h-screen bg-black text-white p-10"
          : "min-h-screen bg-white text-black p-10"
      }
    >

      {/* Heading */}

      <h1 className="text-6xl font-bold mb-4">
        Settings
      </h1>

      <p className="text-2xl mb-10">
        Welcome, {username}
      </p>

      {/* Box */}

      <div
        className={
          dark
            ? "bg-gray-900 p-8 rounded-2xl flex gap-4 flex-wrap"
            : "bg-gray-200 p-8 rounded-2xl flex gap-4 flex-wrap"
        }
      >

        {/* Theme */}

        <button
          onClick={() => setDark(!dark)}
          className="bg-blue-500 px-3 py-1 rounded-lg text-xs"
        >
          Change Theme
        </button>

        {/* Username */}

        <button
          onClick={changeUsername}
          className="bg-green-500 px-3 py-1 rounded-lg text-xs"
        >
          Change Username
        </button>

        {/* Reset */}

        <button
          onClick={resetProgress}
          className="bg-red-500 px-3 py-1 rounded-lg text-xs"
        >
          Reset Progress
        </button>

        {/* About */}

        <button
          onClick={showAbout}
          className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-xs"
        >
          About Project
        </button>

      </div>

    </div>
  );
}

export default Settings;