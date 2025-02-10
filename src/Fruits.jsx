import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Fruits() {
    let fruitItems = useSelector(state => state.products.fruits) || [];
    let dispatch = useDispatch();
    
    const [filter, setFilter] = useState('all'); // 'all', 'below100', 'above100'
    const [searchTerm, setSearchTerm] = useState(""); // Search term state
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 6;

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

    let totalPages = Math.ceil(filteredItems.length / perPage);
    useEffect(() => {
        if (pageNumber > totalPages) setPageNumber(1);
    }, [filteredItems.length, totalPages]);

    let pageStartIndex = (pageNumber - 1) * perPage;
    let currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPage);

    return (
        <div className="container-fluid mt-4">
            <h1 className="text-center mb-4">
                <span role="img" aria-label="Apple">🍎</span>
                <span role="img" aria-label="Banana">🍌</span>
                Fruits
                <span role="img" aria-label="Grapes">🍇</span>
                <span role="img" aria-label="Orange">🍊</span>
            </h1>

            <div className="mb-3 d-flex justify-content-start">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                    <span className="input-group-text" style={{ backgroundColor: "#f8f9fa" }}>🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Fruits..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="mb-3 d-flex gap-3">
                {['all', 'below100', 'above100'].map(type => (
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
                        <strong>{type === "all" ? "Show All" : type === "below100" ? "Below $100" : "Above $100"}</strong>
                    </label>
                ))}
            </div>

            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img 
                                    src={item.image} 
                                    className="card-img-top img-fluid"  
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

export default Fruits;
