import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { uploadVideo } from '../service/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponce}) {
const [video,setVideo]=useState({
  id:"",caption:"",url:"",embedLink:""
})

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedLink =(e)=>{
    const {value} = e.target
   if(value){
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
   }else{
    setVideo({...video,embedLink:""})
  
   }
  }
 
  const handleUpload = async ()=>{
    const{id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning("Please fill the form completely!!!")
    }else{
      // make api call uploadVideo
      const responce = await uploadVideo(video)
      // console.log(responce);
      if(responce.status>=200 && responce.status<300){
        toast.success(`'${responce.data.caption}' video uploaded successfully!!!`)
        // set server responce
        setUploadVideoServerResponce(responce.data)
        //reset the video
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })        
        // hide modal
        handleClose()
      }else{
        // console.log(responce);
        toast.error("Cannot perform the operation now.Please try after some time....")
      }
    }
  }

  return (
    <> 
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'> <i className="fa-solid fa-circle-plus fs-5"></i> </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>PLease Fill The Following Details!!!</p>
         <Form className='border border-secondary rounded p-3'>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text " placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink }/>
       </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary" >Upload</Button>
        </Modal.Footer>
      </Modal>
    
    <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={2000}
    
    />
    </>
  )
}

export default Add