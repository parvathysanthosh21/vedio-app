import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormLabel, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVedio, getAllCategory, updateCategory } from '../service/allAPI';
import Videocard from './Videocard';
function Category() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,SetCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // hide modal
        handleClose()
        // rest state
        SetCategoryName("")
        // get category
        getCategories()
      }else{
        toast.error("Operation failed!!!! Please try after some time....")
      }
    }else{
      toast.warning("Please Provide Category Name!!!")
    }
  }
  const getCategories = async ()=>{
    // make api call
    const {data} = await getAllCategory()
    setAllCategories(data)
  }
  console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])
  const handleDelete = async (id) =>{
    await deleteCategory(id)
    getCategories()
  }
  const dragOver = (e)=>{
    // console.log("Video drag over category");
    e.preventDefault()
  }
  const videoDrop = async (e,categoryId)=>{
    // console.log("Video Dropped inside category Id:" +categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    // console.log("Video Card Id : ",videoId);
    // get video details
    const {data} = await getAVedio(videoId)
    // get category details
    const selectedCategory = allCategories?.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // make an api call to update category
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }
  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-primary'>Add New Category</button>
    </div>
    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className="m-5 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
          <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(card=>(
                <Col sm={12} >
                <Videocard displayData={card} insideCategory={true}/>
                </Col>
              ))
            }
          </Row>
        </div>
      )): <p className='fw-bolder fs-5 text-danger'>No categories are added!!!</p>
    }
 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form className='border border-secondary rounded p-3'>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormLabel>Enter Category Name</FormLabel>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>SetCategoryName(e.target.value)}/>
       </Form.Group>     
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory}  variant="primary">Add</Button>
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

export default Category