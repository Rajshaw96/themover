import React, { useState } from "react"; 
import { Form, Button, Container, Card, Alert } from "react-bootstrap"; 
import { Link, useNavigate } from "react-router-dom"; 
import { config } from "../../environment/environment";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success message

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch(`${config.API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      let data;
      if (!response.ok) {
        throw new Error(data.msg || "Invalid email or password!");
      }
      setSuccess("Login Successful! 🎉 Redirecting...");
      setTimeout(() => {
        navigate("/booking-ui"); // Redirect to home page
      }, 2000);
    } catch (error) {
      setError(error.message || "Server error! Please try again later.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 mt-4">
      <Card style={{ width: "400px" }} className="p-4 shadow mt-5">
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor:"#FF0057" }}>
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
