import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MilkItems() {
    let milkItems = useSelector(state => state.products.milk) || [];
    let dispatch = useDispatch();

    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 6;

    // Filtering logic
    let filteredItems = milkItems.filter(item => 
        filter === "below100" ? item.price < 100 : 
        filter === "above100" ? item.price >= 100 : true
    );

    // Search logic
    filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let totalPages = Math.ceil(filteredItems.length / perPage);

    useEffect(() => {
        if (pageNumber > totalPages) setPageNumber(1);
    }, [filteredItems.length, totalPages]);

    let pageStartIndex = (pageNumber - 1) * perPage;
    let currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPage);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4" style={{color:'red'}}>  🧀 Milk Items 🥛</h1>

            {/* Search Bar */}
            <div className="mb-3 d-flex justify-content-start">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                    <span className="input-group-text">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Milk Items..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setPageNumber(1);
                        }}
                    />
                </div>
            </div>

            {/* Price Filter */}
            <div className="mb-3 d-flex gap-3">
                {["all", "below100", "above100"].map(type => (
                    <label key={type} className="form-check-label d-flex align-items-center gap-2">
                        <input 
                            type="radio" 
                            className="form-check-input" 
                            checked={filter === type} 
                            onChange={() => {
                                setFilter(type);
                                setPageNumber(1);
                            }} 
                        />
                        <strong>{type === "all" ? "Show All" : type === "below100" ? "Below ₹100" : "Above ₹100"}</strong>
                    </label>
                ))}
            </div>

            {/* Display Milk Items */}
            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img 
                                    src={item.image} 
                                    className="card-img-top"  
                                    alt={item.name} 
                                    style={{ height: "220px", objectFit: "contain", padding: "10px" }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="text-success fw-bold">₹{item.price}</p>
                                    <button  className="btn btn-warning w-100 mt-auto"  onClick={() => dispatch(addToCart(item))} >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-danger text-center">No items available...</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav className="d-flex justify-content-center mt-4 gap-2">
                    <button className="btn btn-secondary" onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn ${pageNumber === index + 1 ? "btn-primary" : "btn-light"}`} 
                            onClick={() => setPageNumber(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button className="btn btn-secondary" onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === totalPages}>
                        Next
                    </button>
                </nav>
            )}
        </div>
    );
}

export default MilkItems;
