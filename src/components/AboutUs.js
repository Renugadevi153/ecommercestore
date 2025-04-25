// src/components/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card shadow-sm p-4">
          <h2 className="mb-4 text-primary fw-bold">About Us</h2>
          <p className="lead">
            Welcome to <span className="fw-semibold text-secondary">Basic Online Store</span>! We are committed to providing the best products at affordable prices.
            Our mission is to bring quality and convenience to your shopping experience.
          </p>
          <p>
            Our dedicated team works tirelessly to select only the finest items for you, ensuring a smooth and enjoyable online shopping journey.
            Customer satisfaction is at the heart of everything we do.
          </p>
          <blockquote className="blockquote mt-4 border-start border-4 border-primary ps-3">
            <p className="mb-0 fst-italic">
              "Quality, affordability, and trust — that's our promise to you."
            </p>
            <footer className="blockquote-footer mt-2">The Basic Online Store Team</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
