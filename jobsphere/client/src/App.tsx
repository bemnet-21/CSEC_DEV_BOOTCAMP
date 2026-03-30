import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Header from "./components/layout/Header";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import AddJob from "./pages/AddJob";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import type { User } from "./interface";
import { logout } from "./store/authSlice";

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isAuthenticated) {
      navigate('/');
    } else if (!token && isAuthenticated) {
      navigate('/login');
    }

    try {
      if (token) {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
          dispatch(logout())
          navigate('/login')
        }

      }
    } catch (error) {
        dispatch(logout())
        navigate('/login')
    }

  }, [navigate])

  return (
    <>
      {isAuthenticated && <Header />}

      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
        path="/signup" 
        element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} 
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/add-job" element={<AddJob />} />
        </Route>

        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </>
  );
}

export default App;