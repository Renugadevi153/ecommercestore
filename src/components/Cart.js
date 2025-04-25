import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, checkout }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontWeight: '700', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center fs-5 text-muted">Your cart is empty.</p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="card mb-3 shadow-sm"
                style={{ borderRadius: '15px', overflow: 'hidden' }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title fw-bold" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                      {item.title}
                    </h5>
                    <p className="card-text fs-5 text-primary">
                      ${item.price.toFixed(2)} &times; {item.quantity}
                    </p>
                    <p className="card-text fs-6 text-secondary" style={{ fontStyle: 'italic' }}>
                      Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                  </div>

                  <div className="d-flex flex-column align-items-end">
                    <div className="btn-group mb-2" role="group" aria-label="Quantity controls">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        –
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

             <div className="text-center mt-4">
              <button
                className="btn btn-success btn-lg px-5 shadow"
                onClick={checkout}
                style={{
                  fontWeight: '600',
                  borderRadius: '30px',
                  letterSpacing: '1.2px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#28a745cc')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
