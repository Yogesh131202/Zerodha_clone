import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a href="" className="mt-5">
          Track Tickets
        </a>
      </div>
      <div className="row p-5">
        <div className="col-7 p-5 mlink">
          <h4 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ... " />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 p-5 mt-3 mb-5">
          <h3>Featured</h3>
          <ol>
            <li style={{marginBottom:"20px", fontSize:"18px", marginTop:"15px"}}><a href="" >Surveillance measure on scrips - August 2024</a></li>
            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
