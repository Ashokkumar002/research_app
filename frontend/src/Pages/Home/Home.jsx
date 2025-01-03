import React, { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { UserContext } from "../../context/userContext"; // Import UserContext

const Home = () => {
  const { user } = useContext(UserContext); // Access user data and logout method

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f8f9fa",
  };

  const heroStyle = {
    textAlign: "center",
    backgroundImage:
      "url('https://source.unsplash.com/1600x900/?journal,research')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "100px 20px",
  };

  const heroTextStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "40px 20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const profileMenuStyle = {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    zIndex: 1000,
  };

  return (
    <div>
      <div style={containerStyle}>
        {/* Header */}
        <NavBar />

        {/* Hero Section */}
        <section style={heroStyle}>
          <div style={heroTextStyle}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              Welcome to Journal Finder
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              {user
                ? `Hello, ${user.username}! You are logged in.`
                : "Please sign in to start your journey."}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section style={cardContainerStyle}>
          <div style={cardStyle}>
            <h3>Find a Journal</h3>
            <p>
              Get personalized recommendations for journals that best match your
              research.
            </p>
          </div>
          <div style={cardStyle}>
            <h3>Publish with Us</h3>
            <p>
              Submit your work for publication in top-tier journals in your
              field.
            </p>
          </div>
          <div style={cardStyle}>
            <h3>Track Your Research</h3>
            <p>
              Monitor your submission status and get updates on your research
              progress.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
