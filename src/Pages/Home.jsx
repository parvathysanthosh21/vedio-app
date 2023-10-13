import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  const [uploadVideoServerResponce,setUploadVideoServerResponce] = useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
<Add setUploadVideoServerResponce={setUploadVideoServerResponce}/>
      </div>
      <Link to={'/watch-history'} className='fs-5' style={{textDecoration:'none',color:'white'}}>Watch History</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 d-flex justify-content-between">
      <div className="all-vedios col-lg-9">
        <h2>All Vedios</h2>
        <View uploadVideoServerResponce={uploadVideoServerResponce}/>
      </div>
      <div className="category col-lg-3">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home