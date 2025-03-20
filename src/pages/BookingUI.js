import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for redirection
import "../assets/styles/BookingUI.css";

const BookingUI = () => {
  const [formData, setFormData] = useState({
    city: "Ahmedabad",
    pickup: "",
    drop: "",
    serviceLiftFrom: false,
    floorFrom: "",
    serviceLiftTo: false,
    floorTo: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    localStorage.setItem("bookingData", JSON.stringify(formData)); // Store data
    navigate("/packers-movers"); // Redirect after submission
  };
  return (
    <div className="main-div" style={{ marginTop: "10rem" }}>
      <div className="location">
        <span className="icon">📍</span>
        <select name="city" value={formData.city} onChange={handleChange} className="city-dropdown-name">
          <option>Ahmedabad</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Kolkata</option>
        </select>
      </div>

      <form className="container" onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <label>
              Moving From <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="pickup" value={formData.pickup} onChange={handleChange} placeholder="Pickup address" required />
          </div>
          <div className="service-lift" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input type="checkbox" name="serviceLiftFrom" checked={formData.serviceLiftFrom} onChange={handleChange} id="service-lift-from" />
            </div>
            <div>
              <label htmlFor="service-lift-from">Has Service Lift?</label>
            </div>
            <div>
              <input type="text" name="floorFrom" value={formData.floorFrom} onChange={handleChange} placeholder="Floor No." />
            </div>
          </div>
        </div>
        <div>
          <div className="form-group">
            <label>
              Moving To <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="drop" value={formData.drop} onChange={handleChange} placeholder="Drop address" required />
          </div>
          <div className="service-lift" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input type="checkbox" name="serviceLiftTo" checked={formData.serviceLiftTo} onChange={handleChange} id="service-lift-to" />
            </div>
            <div>
              <label htmlFor="service-lift-to">Has Service Lift?</label>
            </div>
            <div>
              <input type="text" name="floorTo" value={formData.floorTo} onChange={handleChange} placeholder="Floor No." />
            </div>
          </div>
        </div>
        <button type="submit" className="estimate-btn" style={{ justifyContent: "center", marginTop: "10px", marginRight: "13rem" }}>
          Get an estimate →
        </button>
      </form>
    </div>
  );
};

export default BookingUI;
