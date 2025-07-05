// src/components/PrivateRoutes.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  if (loading) return <p>Loading...</p>;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
