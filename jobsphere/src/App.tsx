import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import JobDetails from "./pages/JobDetails"
import Header from "./components/layout/Header"

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
