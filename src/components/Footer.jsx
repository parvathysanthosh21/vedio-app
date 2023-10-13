import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%', height:'300px', lineHeight:'35px'}} className="d-flex  justify-content-center flex-column flex-wrap">
     <div className='d-flex justify-content-evenly flex-wrap'>
        <div className='footer-head' style={{width:'400px'}}>
        <Link 
            to={"/"}
            className='fs-4'
            style={{textDecoration:"none", color:'white'}}>
  <i className="fa-solid fa-cloud-arrow-up"></i>  
  Media Player  
            </Link>
           
  <h6>
              Designed and built with all the love in the world by the React team with the help of our contributors.
    
  </h6><h6>Code licensed React, docs CC BY 3.0.</h6>
  <h6>Currently v5.3.2.</h6>
  
        </div>
        <div className="links d-flex justify-content-center flex-column flex-wrap">
          <h5>Links</h5>
  <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Landing page</Link>
  <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Home</Link>
  <Link to={"/"} style={{textDecoration:'none', color:'white'}}>Watch History</Link>
  
        </div>
        <div className="guides d-flex justify-content-center flex-column flex-wrap">
          <h5>Guides</h5>
        <Link to={"https://react-bootstrap.netlify.app/"} style={{textDecoration:'none', color:'white'}}>React</Link>
  <Link to={"https://react-bootstrap.netlify.app/"} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
  <Link to={"https://react-bootstrap.netlify.app/"} style={{textDecoration:'none', color:'white'}}>Router</Link>
        </div>
        <div className="contact d-flex justify-content-center flex-column flex-wrap">
          <h5>Contact Us</h5>
          <div className='d-flex '>
            <input className='form-control' type="text" placeholder='Enter Your E-mail Id'/>
            <button className='btn btn-primary'>Subscribe</button>
          </div>
          <div style={{width:'200px'}} className="guides d-flex justify-content-around mt-4  flex-wrap ">
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}><i class="fa-brands fa-facebook-f  fa-xl"></i></Link>
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}><i class="fa-brands fa-instagram  fa-xl"></i></Link>
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}><i class="fa-brands fa-twitter  fa-xl"></i></Link>
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
        </div>
        </div>

     </div>
      <p className='d-flex  justify-content-center align-items-center'>Copyright © 2023 Media Player. Built with React.</p>

    </div>
  )
}

export default Footer