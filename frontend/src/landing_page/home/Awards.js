import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='largest broker'></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h2>Largest stock broker in india</h2>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumesin india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6'>
                           <ul>
                              <li className='mb-3'>futures and options</li>
                              <li className='mb-3'>Commodity derivatives</li>
                              <li className='mb-3'>Currency derivatives</li>
                           </ul>
                        </div>
                        <div className='col-6'>
                           <ul>
                              <li className='mb-3'>Stocks & IPOs</li>
                              <li className='mb-3'>Direct mutual funds</li>
                              <li className='mb-3'>Bonds and Gov.Securities</li>
                           </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='press logo image' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;