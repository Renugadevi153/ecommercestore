import React from 'react';

function ContactUs() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container d-flex justify-content-center">
        <div
          className="p-5 bg-white rounded-4 shadow-sm"
          style={{ maxWidth: 600, width: '100%' }}
        >
          <h2 className="mb-4 text-center" style={{ color: '#2c3e50', fontWeight: '700' }}>
            Contact Us
          </h2>
          <p
            className="mb-5 text-center"
            style={{ color: '#7f8c8d', fontSize: '1.125rem', lineHeight: '1.6' }}
          >
            Have questions or need assistance? We’re here to help! Reach out anytime.
          </p>

          <ul className="list-unstyled">
            {[
              {
                icon: 'bi-envelope-fill',
                title: 'Email',
                info: 'support@basiconlinestore.com',
              },
              {
                icon: 'bi-telephone-fill',
                title: 'Phone',
                info: '+91 9876543201',
              },
              {
                icon: 'bi-geo-alt-fill',
                title: 'Address',
                info: '123 Main Street, City, India',
              },
            ].map(({ icon, title, info }) => (
              <li
                key={title}
                className="d-flex align-items-center mb-4"
                style={{ borderBottom: '1px solid #ecf0f1', paddingBottom: 15 }}
              >
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    backgroundColor: '#3498db',
                    width: 50,
                    height: 50,
                    color: 'white',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(52, 152, 219, 0.4)',
                  }}
                >
                  <i className={`bi ${icon}`}></i>
                </div>
                <div className="ms-4">
                  <h6 style={{ marginBottom: 4, color: '#34495e', fontWeight: '600' }}>
                    {title}
                  </h6>
                  <p style={{ marginBottom: 0, color: '#7f8c8d', fontSize: '1rem' }}>{info}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
