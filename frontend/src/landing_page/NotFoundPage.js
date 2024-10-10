import React from 'react'

export default function NotFoundPage() {
    return ( 
        <div className='container text-center mt-5 p-5 '>
            <h2>404 Not Found</h2>
            <p>We couldn’t find the page you were looking for. <a class="active" href="/" style={{textDecoration: "none"}}>
                  Go to Home Page
                </a>
            </p>
            
        </div>
        
     );
}

