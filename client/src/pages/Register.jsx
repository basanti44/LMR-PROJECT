import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    // Register Save
    localStorage.setItem("registered", true);

    alert("Registration Successful");

    // Login Page Open
    navigate("/login");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-50">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-2xl shadow-lg w-96"
      >

        <h1 className="text-5xl font-bold text-center text-blue-500 mb-8">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>

      </form>

    </div>

  );
}

export default Register;