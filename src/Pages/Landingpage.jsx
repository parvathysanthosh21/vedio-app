import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
            <h3>Welcome To<span className='text-warning'> Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, voluptas eius. Rerum quia sunt optio! Magni nemo optio provident natus voluptatum modi ex. Consequatur eaque iusto doloribus itaque quis odio!</p>
            <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-primary'>Get Started <i class="fa-solid fa-arrow-right fa-beat"></i></button>
      </Col>
      <Col></Col>
      <Col  lg={5}>
<img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
      </Col>

    </Row>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
<h3>Features</h3>
<div className="cards mt-5 mb-5 d-flex  align-items-center justify-content-between w-100">
<Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'400px'} variant="top" src="https://i.gifer.com/origin/b9/b901d89242175bcd76ae989af55e646f_w200.gif" />
      <Card.Body>
        <Card.Title>Managing Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'400px'} variant="top" src="https://media.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" />
      <Card.Body>
        <Card.Title>Categories Vedio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'400px'} variant="top" src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
      </div>

      <div className="container border rounded p-5 border-secondary mt-5 d-flex align-items-center justify-content-between w-100 mb-5">
        <div className="col-lg-5">
      <h3 className='text-warning'>Simple, Fast and Powerful</h3>
      <h6 className='mb-3 '><span className='fs-5 '>Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem doloribus hic ab perspiciatis libero ullam, non sint minus accusantium officia debitis sed quas numquam voluptatum reiciendis commodi facere asperiores delectus.</h6>
      <h6 className='mb-3'><span className='fs-5 '>Categories Vedio</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem doloribus hic ab perspiciatis libero ullam, non sint minus accusantium officia debitis sed quas numquam voluptatum reiciendis commodi facere asperiores delectus.</h6>
      <h6 className='mb-3 '><span className='fs-5'>Managing Vedios</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem doloribus hic ab perspiciatis libero ullam, non sint minus accusantium officia debitis sed quas numquam voluptatum reiciendis commodi facere asperiores delectus.</h6>
      
        </div>
        <div className="vedio">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=pFru_HSrF72yPPH5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
           </div>
      </div>
    </>
  )
}

export default Landingpage