import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {

      localStorage.setItem("user", email);

      localStorage.setItem("login", "true");

      alert("Login Successful ✅");

      navigate("/dashboard", { replace: true });

    } else {

      alert("Please fill all fields");

    }
  };

  return (
    <div
      style={{
        background: "#eef9ff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          Login
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;