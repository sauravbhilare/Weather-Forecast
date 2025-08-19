import React from "react";
import locationIcon from "../assets/WeatherIcons.gif"; // Replace with your icon path

const DetectingLocation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))", // subtle dark gradient
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)", // transparent glass effect
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          padding: "40px 50px",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          maxWidth: "500px", // increased width
          width: "90%",
          transition: "all 0.3s ease",
        }}
      >
        <img
          src={locationIcon}
          alt="Detecting location"
          style={{
            width: "120px", // bigger icon
            height: "120px",
            marginBottom: "25px",
            animation: "bounce 1.5s infinite", // subtle bounce animation
          }}
        />
        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#ffffff",
            lineHeight: "1.6",
          }}
        >
          Detecting your location...
          <br />
          Your current location will be displayed on the app and real-time
          weather is being calculated.
        </p>
      </div>

      {/* Optional: CSS animation inside JS */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default DetectingLocation;
