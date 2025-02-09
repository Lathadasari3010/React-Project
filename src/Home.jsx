import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // import the slick-theme css
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const items = [
    { image: "/nonveg.jpeg" }, { image: "/v1.jpeg" }, { image: "/f1.jpeg" },{ image: "/f6.jpeg" } ];

function Home() {
    // Settings for React Slick
    const settings = {
        dots: true, // Show dots navigation
        infinite: true, // Infinite loop sliding
        speed: 500, // Speed of transition
        slidesToShow: 1, // How many slides to show at a time
        slidesToScroll: 1, // How many slides to scroll at once
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 1000, // Set the interval to 1 second (1000ms)
    };

    return (
        <div className="container text-center my-5" style={{ paddingBottom: "0" }}>
            {/* Heading */}
            <h1 className="display-3 fw-bold text-primary">Welcome to My Store</h1>
            <p className="lead text-secondary">Discover the best deals on amazing products, all in one place!</p>

            {/* React Slick Carousel */}
            <Slider {...settings} style={{ marginBottom: "0" }}>
                {items.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item.image}
                            alt="Product"
                            className="d-block mx-auto rounded shadow"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </Slider>

            {/* Go & Shop Button */}
            <Link to="/shop" className="btn btn-primary btn-lg px-5 shadow my-3" style={{ marginTop: "0" }}>
                Go & Shop Now
            </Link>

            {/* Featured Items Section */}
            <section className="py-5 bg-light">
                <h2 className="text-center mb-4 text-dark fw-bold">Featured Items</h2>
                <div className="row">
                    {/* Vegetable Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 rounded-lg">
                            <img src="vegitables.jpeg" alt="Fresh Vegetables" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
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
                            <img src="nonveg.jpeg" alt="Quality Non-Veg" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
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
                            <img src="fruits.jpeg" alt="Fresh Fruits" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Fresh Fruits</h5>
                                <p className="card-text">Fresh fruits delivered right to your doorstep.</p>
                                <Link to="/fruits" className="btn btn-primary w-100">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Details Section */}
            <div className="my-5">
                <h3 className="fw-bold">For More Details</h3>
                <p>Want to know more? Visit our pages below:</p>
                <Link to="/aboutus" className="btn btn-outline-dark mx-2">About Us</Link>
                <Link to="/contactus" className="btn btn-outline-dark mx-2">Contact Us</Link>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p className="mb-0">&copy; 2024 My Store. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
