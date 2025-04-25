import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart (if exists increase quantity)
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity in cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // prevent zero or negative
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Dummy checkout handler
  const checkout = () => {
    alert('Checkout functionality not implemented yet!');
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Smooth scroll handler for navbar links
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#top">Basic Online Store</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#shop" onClick={e => handleScroll(e, 'shop')}>Shop</Nav.Link>
            <Nav.Link href="#about-us" onClick={e => handleScroll(e, 'about-us')}>About Us</Nav.Link>
            <Nav.Link href="#contact-us" onClick={e => handleScroll(e, 'contact-us')}>Contact Us</Nav.Link>
            <Nav.Link href="#cart" onClick={e => handleScroll(e, 'cart')}>
              Cart <Badge bg="info">{cartItems.length}</Badge>
            </Nav.Link>
            <Nav.Link href="#checkout" onClick={e => handleScroll(e, 'checkout')}>
              Checkout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container id="shop" className="my-4 min-vh-75">
        <ProductList addToCart={addToCart} />
      </Container>

      <Container id="cart" className="my-4 min-vh-75">
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          checkout={checkout}
          totalPrice={totalPrice}
        />
      </Container>

      <Container id="checkout" className="my-4 min-vh-75">
        <Checkout cartItems={cartItems} totalPrice={totalPrice} />
      </Container>

      <Container id="about-us" className="my-5">
        <AboutUs />
      </Container>

      <Container id="contact-us" className="my-5">
        <ContactUs />
      </Container>

      <Footer />
    </>
  );
}

export default App;
