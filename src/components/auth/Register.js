import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../environment/environment";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [ccode, setCcode] = useState("+91");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    if (!name || !email || !mobile || !ccode || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch(`${config.API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile, ccode, password }),
      });
      // Registration successful, but still show an error message
      setSuccess("Registration Successful! 🎉 Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.message || "Server error! Please try again later.");
    }
  };

  return (
    <Container className="flex justify-center items-center min-h-screen px-4">
      <Card style={{ width: "400px" }} className="p-4 shadow mt-5 mb-2">
        <h2 className="text-center text-xl font-bold mb-3">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit} className="space-y-3">
          <Form.Group className="mb-2">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-0"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-0"
            />
          </Form.Group>
          <Form.Group className="mb-2" style={{display:'none'}}>
            <Form.Label>Country Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country code (e.g., +91)"
              value={ccode}
              onChange={(e) => setCcode(e.target.value)}
              className="mt-0"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-0"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-0"
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-full mt-1" style={{ backgroundColor: "#FF0057" }}>
            Register
          </Button>
        </Form>
        <div className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
