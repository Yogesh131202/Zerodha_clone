import React from "react";

function Hero() {
  return (
    <div className="container text-center mb-5 border-bottom">
      <h1 className="mt-5 p-3">Technology</h1>
      <h5 className="text-muted mt-3 fs-4">
        Sleek, modern, and intuitive trading platforms
      </h5>
      <p className="text-muted mt-3 mb-5">
        Check out our{" "}
        <a class="active" href="#" style={{ textDecoration: "none" }}>
          investment offerings →
        </a>{" "}
      </p>
    </div>
  );
}

export default Hero;
