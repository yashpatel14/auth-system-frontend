
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const { isLoggedIn, userData, loading } = useSelector((state) => state.auth);

  if (loading) return <p>Loading...</p>;

  const isAdmin = userData?.role === "ADMIN";

  return isLoggedIn && isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default AdminRoutes;
