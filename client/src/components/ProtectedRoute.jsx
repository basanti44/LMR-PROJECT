import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLogin = localStorage.getItem("login");

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;