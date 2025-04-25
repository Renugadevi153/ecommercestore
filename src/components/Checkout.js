import React from 'react';

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Checkout</h2>

      <div className="row justify-content-center">
        {/* Order Summary */}
        <div className="col-lg-5 col-md-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Order Summary</h4>
            </div>
            <ul className="list-group list-group-flush">
              {cartItems.length === 0 && (
                <li className="list-group-item text-center text-muted">
                  Your cart is empty.
                </li>
              )}
              {cartItems.map((item) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={item.id}
                >
                  <div>
                    <strong>{item.name || item.title}</strong>
                    <br />
                    <small className="text-muted">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </small>
                  </div>
                  <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Total:</h5>
              <h5 className="text-success mb-0">${totalPrice.toFixed(2)}</h5>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="col-lg-5 col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Shipping Information</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="RD"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label fw-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St, City, Country"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-semibold">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
