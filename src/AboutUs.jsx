import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-info text-white text-center py-5">
       
          <h1 className="display-4 font-weight-bold">About Us</h1>
          <p className="lead mb-4">Learn more about who we are, what we do, and our mission.</p>
        
      </section>

      {/* Our Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="font-weight-bold">Our Mission</h2>
              <p>
                At Our Shop, our mission is to provide the best quality fresh produce, dairy, meats, and more.
                We are committed to supporting local farmers and offering our customers high-quality, organic products
                at affordable prices.
              </p>
            </div>
            <div className="col-md-6">
            <img
                src="our-vision.png" height={280} width={280}
                alt="Our Mission"
                className="img-fluid rounded shadow-lg"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-4">Why Choose Us?</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 rounded-lg">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Fresh Products"
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Fresh Products</h5>
                  <p className="card-text">
                    We only stock the freshest produce, ensuring top-notch quality and taste with every purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 rounded-lg">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Customer Support"
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Excellent Customer Support</h5>
                  <p className="card-text">
                    Our dedicated team is always here to assist you and ensure you have the best shopping experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 rounded-lg">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Sustainable Practices"
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sustainable Practices</h5>
                  <p className="card-text">
                    We take pride in our commitment to sustainability, supporting eco-friendly farming methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 Our Shop. All rights reserved.</p>
      </footer>
    </>
  );
}

export default AboutUs;
