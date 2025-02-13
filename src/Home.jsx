import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const items = [
    { image: "/vegitable4.jpg" },
    { image: "/nonveg1.jpg" },
    { image: "/fruits3.jpg" },
    { image: "/milk1.jpg" },
    { image: "/vegitable1.jpg" },
    { image: "/nonveg4.jpg" },
    { image: "/fruiits3.jpeg" },
    { image: "/milk3.png" },
    { image: "/vegitables6.jpg" },
    { image: "/nonveg3.avif" },
    { image: "/fruits1.jpg" },
    { image: "/milk2.jpg" },
    { image: "/vegitable5.jpg" },
    { image: "/nonveg2.jpg"},
   
    { image: "/vegitable2.jpg" },
    { image: "/nonveg6.avif" },
    { image: "/milk5.jpg" },
    { image:"/vegitable8.jpg" },
    { image: "/milk4.jpg" },
    { image:"/vegitable7.jpg" },
];

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true, // Makes images fit dynamically
    };

    return (
        <div className="container text-center my-5" style={{ backgroundColor: "aliceblue" }}>
            {/* Heading */}
            <h1 className="display-3 fw-bold " style={{color:'red'}}>Welcome to My Store 🎉</h1>
            <h3 style={{color:'blueviolet'}}>Fresh Fusion Mart 🛍️</h3>
            <p cclassName="lead " style={{ color: 'green',fontSize: '1.5rem'}}>Discover the best deals on amazing products, all in one place!</p>

            {/* React Slick Carousel */}
            <div className="my-4">
                <Slider {...settings} className="mx-auto" style={{ maxWidth: "90vw" }}> {/* Adjust width based on browser */}
                    {items.map((item, index) => (
                        <div key={index} className="d-flex justify-content-center">
                            <img
                                src={item.image}
                                alt="Product"
                                className="rounded shadow w-100"
                                style={{ maxHeight: "500px", objectFit: "contain" }} // Responsive height
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Go & Shop Button */}
            <Link to="/veg" className="btn btn-primary btn-lg px-5 shadow my-3">
                Go & Shop Now
            </Link>
{/* Featured Items Section */}
<section className="py-5 bg-light" >
                <h2 className="text-center mb-4  fw-bold" style={{color:'deeppink'}}>Featured Items</h2>
                <div className="row">
                    {/* Vegetable and Non-Veg in one row */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 rounded-lg">
                            <img src="vegitable8.jpg" alt="Fresh Vegetables" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title">Fresh Vegetables</h5>
                                <p className="card-text">Explore a wide range of fresh and healthy vegetables.</p>
                                <Link to="/veg" className="btn btn-primary w-100">Shop Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 rounded-lg">
                            <img src="nonveg4.jpg" alt="Quality Non-Veg" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title">Quality Non-Veg</h5>
                                <p className="card-text">Delicious non-veg items with guaranteed quality.</p>
                                <Link to="/nonveg" className="btn btn-primary w-100">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fruits and Milk Items in another row */}
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 rounded-lg">
                            <img src="fruits3.jpg" alt="Fresh Fruits" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title">Fresh Fruits</h5>
                                <p className="card-text">Fresh fruits delivered right to your doorstep.</p>
                                <Link to="/fruits" className="btn btn-primary w-100">Shop Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 rounded-lg">
                            <img src="milk1.jpg" alt="Fresh Milk" className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title">Fresh Milk</h5>
                                <p className="card-text">Pure and fresh milk delivered straight to your doorsteps.</p>
                                <Link to="/milk" className="btn btn-primary w-100">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Details Section */}
            <div className="my-5" style={{backgroundColor:'aliceblue'}}>
                <h3 className="fw-bold" style={{color:'deeppink'}}>For More Details</h3>
                <p style={{color:'green'}}>Want to know more? Visit our pages below:</p>
                <Link to="/aboutus" className="btn btn-outline-dark mx-2" style={{backgroundColor:'yellow'}}>About Us</Link>
                <Link to="/contactus" className="btn btn-outline-dark mx-2" style={{backgroundColor:'yellow'}}>Contact Us</Link>
            </div>



            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p className="mb-0">&copy; 2024 My Store. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
