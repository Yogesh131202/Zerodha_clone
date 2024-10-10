import React from "react";

function CreateTicket() {
  return (
    <div className="container text-muted  p-3">
      <h4 className="mt-3 mb-5 ">
        To create a ticket, select a relevant topic
      </h4>
      <div className="row mb-5">
        <div className="col-4 mb-3" style={{ lineHeight: "2.5" }}>
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Getting started
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Online
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Offline
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Charges
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Company, Partnership and HUF
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Non Resident Indian (NRI)
          </a>
          <br />

          <h4 className="mt-5">
            <i class="fa fa-credit-card" aria-hidden="true"></i>Funds
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Fund withdrawal
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Adding funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Adding bank accounts
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            eMandates
          </a>
          <br />
        </div>

        <div className="col-4 mb-3" style={{ lineHeight: "2.5" }}>
          <h4>
            <i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Login credentials
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Your Profile
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Account modification and segment addition
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            CMR & DP ID
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Nomination
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Transfer and conversion of shares
          </a>
          <br />

          <h4 className="mt-5">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>Console
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            IPO
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Portfolio
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Funds statement
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Profile
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Reports
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Referral program
          </a>
          <br />
        </div>

        <div className="col-4 mb-3" style={{ lineHeight: "2.5" }}>
          <h4>
            <i class="fa fa-bar-chart" aria-hidden="true"></i>Trading and
            Markets
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Trading FAQs
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Kite
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Margins
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Product and order types
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Corporate actions
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Kite features
          </a>
          <br />

          <h4 className="mt-5">
            <i class="fa fa-circle-o" aria-hidden="true"></i>Coin
          </h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Understanding mutual funds and Coin
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Coin app
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Coin web
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Transactions and reports
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            National Pension Scheme (NPS)
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
