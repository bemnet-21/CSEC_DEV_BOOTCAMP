import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Header from "./components/layout/Header";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import AddJob from "./pages/AddJob";
import Signup from "./pages/Signup";

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;