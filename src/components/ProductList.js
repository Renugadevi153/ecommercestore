import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              className="card h-100"
              style={{
                border: '2px solid #007bff', // Bootstrap primary color border
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ minHeight: '3em' }}>{product.title}</h5>
                <p
                  className="card-text"
                  style={{
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.description}
                </p>
                <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
