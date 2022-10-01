import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <>
    <div className='container py-5'>
      <div className="row py-5  justify-content-center">
        <div className="col-12 ">
          <h1 className='text-center ' style={{fontSize:'6rem'}}>404 Page</h1>
          <p className='text-center '><Link to="/">Go to Home Page</Link> </p>
        </div>
      </div>
    </div>
 

    
  
</>

  )
}
