import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <h5 className="mt-5 mb-5 p-5 fs-5">
        Want to know more about our technology stack? Check out the
        <a href="#" style={{ textDecoration: "none" }}> Zerodha.tech </a>blog.
      </h5>
      <h2 className="mb-3">The Zerodha Universe</h2>
      <p className="fs-6 ">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-3 p-5 text-muted" style={{ fontSize: "13px" }}>
        <div className="col-4">
          <img
            src="\media\images\zerodhaFundhouse.png"
            alt="fund house"
            className="mb-5"
            style={{ width: "60%" }}
          ></img>
          <p className="mb-5">
            Our asset management venture
            <br /> that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>
          <img
            src="\media\images\streakLogo.png"
            alt="fund house"
            style={{ width: "55%" }}
          ></img>
          <p>
            Systematic trading platform
            <br /> that allows you to create and backtest
            <br /> strategies without coding.
          </p>
        </div>

        <div className="col-4">
          <img
            src="\media\images\sensibullLogo.svg"
            alt="fund house"
            className="mb-5"
            style={{ width: "70%" }}
          ></img>
          <p className="mb-5 ">
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine
            <br /> data points like open interest, FII/DII, and more.
          </p>
          <img
            src="\media\images\smallcaseLogo.png"
            alt="fund house"
            style={{ width: "65%" }}
          ></img>
          <p>
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4">
          <img
            src="\media\images\goldenpiLogo.png"
            alt="fund house"
            className="mb-5"
            style={{ width: "50%" }}
          ></img>
          <p className="mb-5 ">
            Investment research platform
            <br /> that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
          <img
            src="\media\images\dittoLogo.png"
            alt="fund house"
            style={{ width: "45%" }}
          ></img>
          <p>
            Personalized advice on life
            <br /> and health insurance. No spam
            <br /> and no mis-selling.
          </p>
        </div>
      </div>
      <button
        className="btn btn-primary fs-5 mb-5"
        style={{ width: "16%", margin: "0 auto" }}
      >
        Sign Up Now
      </button>
    </div>
  );
}

export default Universe;
