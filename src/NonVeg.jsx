import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function NonVegItems() {
    let nonVegItems = useSelector(state => state.products.nonvegItems) || [];
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState('all'); // 'all', 'below1000', 'above1000'
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 3;

    console.log("Non-Veg Items from Store:", nonVegItems); // Debugging

    // Filter non-veg items based on selected price range
    let filteredItems = nonVegItems.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'below1000') return item.price < 1000;
        if (filter === 'above1000') return item.price >= 1000;
        return true;
    });

    let totalPages = Math.ceil(filteredItems.length / perPage);
    let pageStartIndex = (pageNumber - 1) * perPage;
    let pageEndIndex = pageStartIndex + perPage;
    let currentItems = filteredItems.slice(pageStartIndex, pageEndIndex);

    const handlePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setPageNumber(page);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Non-Veg Items</h1>

            {/* Price Filter */}
            <div className="mb-3 d-flex gap-3">
                {["all", "below1000", "above1000"].map((type) => (
                    <div key={type} className="form-check">
                        <input 
                            type="radio" 
                            className="form-check-input"
                            checked={filter === type} 
                            onChange={() => {
                                setFilter(type);
                                setPageNumber(1);  // Reset page to 1 when filter changes
                            }} 
                        />
                        <label className="form-check-label">
                            <strong>
                                {type === "all" ? "Show All" : type === "below1000" ? "Below $1000" : "Above $1000"}
                            </strong>
                        </label>
                    </div>
                ))}
            </div>

            {/* Display Non-Veg Items */}
            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
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
                        onClick={() => handlePage(pageNumber - 1)}
                        disabled={pageNumber === 1}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn ${pageNumber === index + 1 ? "btn-primary" : "btn-light"} mx-1`}
                            onClick={() => handlePage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        className="btn btn-secondary mx-1"
                        onClick={() => handlePage(pageNumber + 1)}
                        disabled={pageNumber === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default NonVegItems;
