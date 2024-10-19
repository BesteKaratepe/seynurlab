import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const { token, logout } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) {
      logout();
      return navigate("/login");
    }
  } catch (error) {
    console.error("Token decode error:", error);
    logout();
    return navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
