import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling

const AboutUsPage = () => {
  return (
    <div className="container my-5">
      {/* Title Section */}
      <h1 className="text-center text-primary fw-bold">About Us</h1>
      <p className="text-center text-muted">Learn more about our journey and values.</p>

      {/* Content Section */}
      <div className="row align-items-center my-4">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img 
            src="about.png" 
            alt="About Us" 
            width={400}
            height={400}

            className="img-fluid rounded shadow-lg" 
            style={{ maxHeight: "350px", objectFit: "cover" }} 
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h3 className="text-dark">Welcome to Our Store</h3>
          <p className="text-muted">
            We are committed to providing the best products at the most affordable prices. 
            Our journey started with a mission to make quality goods accessible to everyone.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">✔ High-Quality Products</li>
            <li className="list-group-item text-muted">✔ Affordable Pricing</li>
            <li className="list-group-item text-muted">✔ Customer Satisfaction</li>
            <li className="list-group-item text-muted">✔ Fast Delivery</li>
          </ul>
          <Link to="/" className="btn btn-primary mt-4">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Extra Information Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <h4 className="text-success">Our Mission</h4>
          <p className="text-muted">To bring the best quality products at affordable prices.</p>
        </div>
        <div className="col-md-4">
          <h4 className="text-danger">Our Vision</h4>
          <p className="text-muted">To be a global leader in customer satisfaction and quality.</p>
        </div>
        <div className="col-md-4">
          <h4 className="text-warning">Our Values</h4>
          <p className="text-muted">Integrity, Quality, and Commitment.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
