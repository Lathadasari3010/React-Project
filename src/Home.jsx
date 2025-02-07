import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            
            <section className="hero text-white text-center py-5" style={{ backgroundColor: '#e83e8c' }}>
    <h1 className="display-4 font-weight-bold">Welcome to Our Shop</h1>
    <p className="lead mb-4">Discover the best deals on fresh produce, dairy, meats, and more!</p>
    <Link to="/veg" className="btn btn-light btn-lg mt-3 px-5 py-3 shadow-lg">
        Shop Now
    </Link>
</section>





            {/* Featured Items Section */}
            <section className="featured py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4 text-dark font-weight-bold">Featured Items</h2>
                    <div className="row">
                        {/* Vegetable Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 rounded-lg">
                                <img
                                    src="vegitables.jpeg"
                                    alt="Fresh Vegetables"
                                    className="card-img-top rounded-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Fresh Vegetables</h5>
                                    <p className="card-text">Explore a wide range of fresh and healthy vegetables.</p>
                                    <Link to="/veg" className="btn btn-primary w-100">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Non-Veg Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 rounded-lg">
                                <img
                                    src="nonveg.jpeg"
                                    alt="Quality Non-Veg"
                                    className="card-img-top rounded-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Quality Non-Veg</h5>
                                    <p className="card-text">Delicious non-veg items with guaranteed quality.</p>
                                    <Link to="/nonveg" className="btn btn-primary w-100">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Fruits Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 rounded-lg">
                                <img
                                    src="fruits.jpeg"
                                    alt="Fresh Fruits"
                                    className="card-img-top rounded-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Fresh Fruits</h5>
                                    <p className="card-text">Fresh fruits delivered right to your doorstep.</p>
                                    <Link to="/fruits" className="btn btn-primary w-100">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className=" text-white text-center py-4"style={{ backgroundColor: '#fd7e14' }}>
                <p>&copy; 2025 Our Shop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
