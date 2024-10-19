import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";

const PublicRoute = ({ children }) => {
  const { token } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return children;
};

export default PublicRoute;
