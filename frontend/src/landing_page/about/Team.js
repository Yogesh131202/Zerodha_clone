import React from "react";

function Team() {
  return (
    <div className="container mt-5 border-top">
      <h1 className=" mt-5 text-center">People</h1>
      <div className="row ">
        <div className="col-2"></div>

        <div className="col-4">
          <img
            src="\media\images\nithinKamath.jpg"
            alt="founder image"
            className="mt-5"
            style={{ borderRadius: "50%", width: "90%" }}
          ></img>
          <div className="foname mt-3">
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>

        <div className="col-6">
          <div className="fs-6 mt-5 text-muted">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>

            <p>
              Connect on{" "}
              <a class="active" href="/" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
