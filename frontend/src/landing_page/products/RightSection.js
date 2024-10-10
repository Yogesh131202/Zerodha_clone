import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4 p-3 mt-5 text-muted">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 mb-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
        <div className="col-8 p-2">
          <img src={imageURL} style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
