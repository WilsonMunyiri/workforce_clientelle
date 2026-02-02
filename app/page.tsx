"use client";

export default function Home() {
  return (
    <div
      className="w3-display-container w3-animate-opacity w3-text-white"
      style={{
        backgroundImage: "url('/images/back.jpg')", // Your image in public/images
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway"
      />
      {/* W3.CSS */}
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/5/w3.css"
      />

      {/* Top left logo */}
      <div className="w3-display-topleft w3-padding-large text-5xl">
      Ian Boit
      </div>


      {/* Center content */}
      <div className="w3-display-middle text-center">
        <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
        <hr
          className="w3-border-grey"
          style={{ margin: "auto", width: "40%" }}
        />
        <p className="w3-large w3-center text-6xl">
          35 days left
        </p>
      </div>
  
    </div>
  );
}
