import { Navigate, Outlet } from 'react-router-dom';
import type { ProtectedRouteProps } from '../interface';



const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;