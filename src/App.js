import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Services from "./pages/Service";
import Estimate from "./MainHeaderPages/Estimate";
import Megalmage from "./MainHeaderPages/MegaImage";
import Porter from "./MainHeaderPages/Porter";
import BecomePartner from "./pages/BecomePartner/BecomePartner"
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookingUI from "./pages/BookingUI";
import Packers from './PackersMovers/PackersMovers'
const App = () => {
  return (
    <>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/estimate" element={<Estimate/>} />
          <Route path="/megalmage" element={<Megalmage/>} />
          <Route path="/porter" element={<Porter/>} />
          <Route path="/become-partner" element={<BecomePartner/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking-ui" element={<BookingUI />} />
          <Route path="/packers-movers" element={<Packers />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
