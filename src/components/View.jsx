import React, { useEffect, useState } from 'react'
import Videocard from './Videocard';
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../service/allAPI';

function View({uploadVideoServerResponce}) {
  const [removeVedioServerResponce,setRemoveVedioServerResponce] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  const getAllUploadedVideos = async ()=>{
    // make api call getAllVideos
    const {data} = await getAllVideos()
    setAllVideos(data)
  }
  useEffect(()=>{
    getAllUploadedVideos()
    setRemoveVedioServerResponce(false)
  },[uploadVideoServerResponce, removeVedioServerResponce])
  // console.log(allVideos);
  return (
   <> 
   <Row>
         {
          allVideos?.length>0?
          allVideos?.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3}>
          <Videocard setRemoveVedioServerResponce={setRemoveVedioServerResponce} displayData={video}/>
          </Col>
          
          ))
          :
          <p className='fw-bolder fs-5 text-danger'>Nothing to Display !!!</p>

          }
    </Row>
    </>
  )
}

export default View