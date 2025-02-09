import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function NonVegItems() {
    let nonVegItems = useSelector(state => state.products.nonvegItems) || [];
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState('all'); // 'all', 'below1000', 'above1000'
    const [searchTerm, setSearchTerm] = useState("");

    console.log("Non-Veg Items from Store:", nonVegItems); // Debugging

    // Filter non-veg items based on selected price range
    let filteredItems = nonVegItems.filter(item => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'below1000') {
            return item.price < 1000;
        } else if (filter === 'above1000') {
            return item.price >= 1000;
        }
        return true;
    });

    // Search logic: Filter items by name based on the search term
    filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            {/* Heading with Chicken, Fish, Mutton, and Prawns Emojis */}
            <h1 className="text-center mb-4">
                <span role="img" aria-label="Chicken">🐔</span>
                
                Non-Veg Items
                <span role="img" aria-label="Fish">🐟</span>
                
                
            </h1>

            {/* Search Bar aligned to the left */}
            <div className="mb-3 d-flex justify-content-start">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                <span className="input-group-text" style={{ backgroundColor: "#f8f9fa" }}>
                        🔍 {/* Search Emoji */}
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Non-Veg Items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Price Filter */}
            <div className="mb-3 d-flex gap-3">
                {/* Show All Checkbox */}
                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        checked={filter === 'all'} 
                        onChange={() => setFilter('all')} 
                    />
                    <label className="form-check-label"><strong>Show All</strong></label>
                </div>

                {/* Below $1000 Checkbox */}
                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        checked={filter === 'below1000'} 
                        onChange={() => setFilter('below1000')} 
                    />
                    <label className="form-check-label">Below $1000</label>
                </div>

                {/* Above $1000 Checkbox */}
                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        checked={filter === 'above1000'} 
                        onChange={() => setFilter('above1000')} 
                    />
                    <label className="form-check-label">Above $1000</label>
                </div>
            </div>

            {/* Display Non-Veg Items */}
            <div className="row">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
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
        </div>
    );
}

export default NonVegItems;
