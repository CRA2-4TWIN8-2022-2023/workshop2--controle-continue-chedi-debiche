import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const products = [
  {
    name: 'PC Lenovo',
    price: 1400,
    img: 'product1.webp',
    like: 0,
    quantity: 10,
    description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page'
  },
  {
    name: 'Mouse',
    price: 30,
    img: 'product2.jpg',
    like: 0,
    quantity: 0,
    description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page'
  },
  {
    name: 'KeyBoard',
    price: 70,
    img: 'product3.jpg',
    like: 0,
    quantity: 20,
    description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page'
  }
];




const Products = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

    useEffect(() => {
      setTimeout(() => {  setShowWelcomeMessage(true);}, 3000);
     }, []);
  
  return (
    <Container>
    {showWelcomeMessage && (
      <Alert variant="success" onClose={() => setShowWelcomeMessage(false)} dismissible>
        Hey , Welcome to our Shop <strong>MyStore</strong>
        <br />
        <small>Thank you for choosing our store, we hope you enjoy your shopping experience</small>
      </Alert>
    )}
  
    <Row>
      {products.map((product, index) => {
        return (
          <Col sm={4} key={index}>
            <Product {...product} />
          </Col>
        );
      })}
    </Row>
  </Container>
  
  
  
  
  
  );
};

export default Products;


