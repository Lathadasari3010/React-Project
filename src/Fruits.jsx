import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Fruits() {
    let fruitItems = useSelector(state => state.products.fruits) || [];
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState('all'); // 'all', 'below100', 'above100'
    const [searchTerm, setSearchTerm] = useState(""); // Search term state

    console.log("Fruit Items from Store:", fruitItems); // Debugging

    // Filter fruit items based on selected price range
    let filteredItems = fruitItems.filter(item => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'below100') {
            return item.price < 100;
        } else if (filter === 'above100') {
            return item.price >= 100;
        }
        return true;
    });

    // Filter by search term
    filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid mt-4">
            {/* Heading with Fruit Emojis */}
            <h1 className="text-center mb-4">
                <span role="img" aria-label="Apple">🍎</span>
                <span role="img" aria-label="Banana">🍌</span>
                Fruits
                <span role="img" aria-label="Grapes">🍇</span>
                <span role="img" aria-label="Orange">🍊</span>
               
            </h1>

            {/* Search Bar with Search Emoji */}
            <div className="mb-3 d-flex justify-content-start">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                    <span className="input-group-text" style={{ backgroundColor: "#f8f9fa" }}>
                        🔍 {/* Search Emoji */}
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Fruits..."
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

                {/* Below $100 Checkbox */}
                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        checked={filter === 'below100'} 
                        onChange={() => setFilter('below100')} 
                    />
                    <label className="form-check-label">Below $100</label>
                </div>

                {/* Above $100 Checkbox */}
                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        checked={filter === 'above100'} 
                        onChange={() => setFilter('above100')} 
                    />
                    <label className="form-check-label">Above $100</label>
                </div>
            </div>

            {/* Display Fruit Items */}
            <div className="row">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img 
                                    src={item.image} 
                                    className="card-img-top img-fluid"  // Added img-fluid for responsiveness
                                    alt={item.name} 
                                    style={{ height: "200px", objectFit: "cover" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-success"><strong>${item.price}</strong></p>
                                    <button 
                                        className="btn btn-warning w-100"
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

export default Fruits;
