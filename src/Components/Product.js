import React, { useState } from 'react';
import { Card, Image, Row, Col, Button, Alert } from 'react-bootstrap';

const Product = (props) => {
  const { name, price, img, quantity, description, like } = props;
  const [likes, setLikes] = useState(props.like);
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const buy = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <Card>
      <Row>
        <Col xs={6} md={4}>
          <Image src={img} fluid />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Prix: {price} DT</Card.Text>
            <Card.Text>Quantity: {quantity} </Card.Text>
            <Card.Text>Likes: {likes} </Card.Text>
            <Button onClick={handleClick} style={{ marginRight: '15px' }}>
  Like
</Button>

<Button variant="primary" onClick={buy} disabled={quantity === 0}>
  Buy
</Button>

            {showAlert ? (
              <Alert className="mt-3" variant="success">
                You bought an item.
              </Alert>
            ) : null}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;
