import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

function VegItems() {
    let vegItems = useSelector(state => state.products.veg) || [];  
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState("all");  
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 3; // Items per page

    // Filtering Logic
    let filteredItems = vegItems.filter(item => {
        if (filter === "below100") return item.price < 100;
        if (filter === "above100") return item.price >= 100;
        return true; // 'all'
    });

    let totalPages = Math.ceil(filteredItems.length / perPage);

    // **🔥 FIX: Reset page number if it's out of range after filtering**
    useEffect(() => {
        if (pageNumber > totalPages) {
            setPageNumber(1);
        }
    }, [filteredItems.length, totalPages]); // Runs when filtering changes

    let pageStartIndex = (pageNumber - 1) * perPage;
    let currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setPageNumber(page);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Veg Items</h1>

            {/* Price Filter */}
            <div className="mb-3 d-flex gap-3">
                {["all", "below100", "above100"].map(type => (
                    <div key={type} className="form-check">
                        <input 
                            type="radio" 
                            id={type} 
                            className="form-check-input"
                            checked={filter === type} 
                            onChange={() => {
                                setFilter(type);
                                setPageNumber(1); // Reset page to 1 immediately
                            }} 
                        />
                        <label className="form-check-label" htmlFor={type}>
                            <strong>
                                {type === "all" ? "Show All" : type === "below100" ? "Below $100" : "Above $100"}
                            </strong>
                        </label>
                    </div>
                ))}
            </div>

            {/* Display Veg Items */}
            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img 
                                    src={item.image} 
                                    className="card-img-top" 
                                    alt={item.name} 
                                    style={{ height: "200px", objectFit: "cover" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-success"><strong>${item.price}</strong></p>
                                    <button 
                                        className="btn btn-primary w-100"
                                        onClick={() => dispatch(addToCart(item))}
                                    >
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
                <div className="d-flex justify-content-center mt-4">
                    <button 
                        className="btn btn-secondary mx-1"
                        onClick={() => handlePageChange(pageNumber - 1)}
                        disabled={pageNumber === 1}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn ${pageNumber === index + 1 ? "btn-primary" : "btn-light"} mx-1`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        className="btn btn-secondary mx-1"
                        onClick={() => handlePageChange(pageNumber + 1)}
                        disabled={pageNumber === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default VegItems;
