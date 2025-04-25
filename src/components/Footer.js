// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#ccc', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <p style={{ margin: 0, textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Basic Online Store. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
