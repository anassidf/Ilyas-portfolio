import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );}

export default App
