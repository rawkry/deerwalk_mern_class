import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Footer = () => {
  return (
<>
<Container className='bg-dark'>
  <Row>
<Col className='text-center py-1 text-white'>
Copyright &copy; Sudeep
</Col>
  </Row>
</Container>

</>

  );
};

export default Footer;
