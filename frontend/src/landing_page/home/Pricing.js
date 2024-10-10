import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 mb-5'>
                  <h2 className='mb-5 fs-2'>Unbeatable pricing</h2>
                  <p>We pioneered the concept of discount broking and price transparancy in india. Flat fees and no hidden charges.</p>
                  <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2 mb-5'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-6 border p-3 '>
                           <h1 className='mb-3'>&#8377;0</h1>
                           <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-3 '>
                           <h1 className='mb-3'>&#8377;20</h1>
                           <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
     );
}

export default Pricing;