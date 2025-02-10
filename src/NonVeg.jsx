import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVegItems() {
    let nonVegItems = useSelector(state => state.products.nonvegItems) || [];
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 6;

    // Filtering logic
    let filteredItems = nonVegItems.filter(item => 
        filter === "below1000" ? item.price < 1000 : 
        filter === "above1000" ? item.price >= 1000 : true
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
            <h1 className="text-center mb-4">🐔 Non-Veg Items 🐟</h1>

            {/* Search Bar */}
            <div className="mb-3 d-flex justify-content-start">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                    <span className="input-group-text">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Non-Veg Items..."
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
                {["all", "below1000", "above1000"].map(type => (
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
                        <strong>{type === "all" ? "Show All" : type === "below1000" ? "Below $1000" : "Above $1000"}</strong>
                    </label>
                ))}
            </div>

            {/* Display Non-Veg Items */}
            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="text-success fw-bold">${item.price}</p>
                                    <button className="btn btn-primary w-100" onClick={() => dispatch(addToCart(item))}>
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

export default NonVegItems;
