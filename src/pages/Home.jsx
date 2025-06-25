import React, { useContext } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { ApiData } from '../components/ContextApi';

const Home = () => {

  let data = useContext(ApiData);

  return (
    <>
    <h1 style={{textAlign: "center", paddingTop: "60px", color: "#047847"}}>Home Page</h1>
     <section style={{paddingTop: "60px", paddingBottom: "60px"}}>
      <Container>
        <Row>
            {data.map((item)=>(
          <Col lg={4} className='mb-4'>
             <Card style={{ width: '18rem' }} className='h-100'>
      <Card.Body>
        <Card.Title style={{color: "orange"}}>{item.id}</Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title style={{color: "red", textAlign: "center"}}>Price: {item.price}$</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {item.category}</ListGroup.Item>
        <ListGroup.Item>Discount Percentage: {item.discountPercentage}</ListGroup.Item>
        <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
        <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
        <ListGroup.Item>Brand: {item.brand}</ListGroup.Item>
        <ListGroup.Item>Weight: {item.weight}</ListGroup.Item>
        <ListGroup.Item>Height: {item.height}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Reviewer email{item.reviewerEmail}</Card.Link>
      </Card.Body>
    </Card>
          </Col>
            ))}
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Home