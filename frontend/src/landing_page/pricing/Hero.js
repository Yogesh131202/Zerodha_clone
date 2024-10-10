import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 mb-5 p-5 fs-2">
        <h1 className="mb-3">Pricing</h1>
        <h4>Free equity investments and flat ₹20 intraday and F&O trades</h4>
      </div>
      <div className="row text-center border-top border-bottom">
        <div className="col-4  p-5 mt-3">
          <img src="\media\images\pricing0.svg" alt="coin image" />
          <h4 className="mt-3 mb-4">Free equity delivery</h4>
          <p className="mb-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4  p-5 mt-3">
          <img src="\media\images\intradayTrades.svg" alt="coin image" />
          <h4 className="mt-3 mb-4">Intraday and F&O trades</h4>
          <p className="mb-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="\media\images\pricing0.svg" alt="coin image" />
          <h4 className="mt-3 mb-4">Free direct MF</h4>
          <p className="mb-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
