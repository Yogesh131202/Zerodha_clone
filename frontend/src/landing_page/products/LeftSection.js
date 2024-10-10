import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 p-3">
          <img src={imageURL} style={{width:"90%"}}/>
        </div>
        <div className="col-5 p-3 mt-5 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 mb-3">
            {tryDemo && <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>}
            {learnMore &&<a href={learnMore} style={{marginLeft:"40px", textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>}
          </div>
          <div>
            {googlePlay && <a href={googlePlay}>
              <img src="\media\images\googlePlayBadge.svg" />
            </a>}
            {appStore && <a href={appStore} style={{marginLeft:"30px"}}>
              <img src="\media\images\appstoreBadge.svg" />
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
