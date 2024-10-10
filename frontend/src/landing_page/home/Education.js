import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
                  <img src='media\images\education.svg' style={{width:"70%"}}></img>
                </div>
                <div className='col-6 '>
                    <div className='mb-5' >
                        <h3 className='mt-5 mb-4 fs-2'>Free and open market education</h3>
                        <p>varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                        <a href='' style={{textDecoration: "none"}}> Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                    <div className='mb-5' >
                        <p>Trading Q&A,  the most active trading and investment community in india for all your market related queries.</p>
                        <a href='' style={{textDecoration: "none"}}> Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                </div>                
            </div>
        </div>
     );
}

export default Education;