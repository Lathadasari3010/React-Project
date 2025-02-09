import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
  let vegItems = useSelector(state => state.products.veg) || [];
  let dispatch = useDispatch();

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering logic
  let filteredItems = vegItems.filter(item => 
    filter === "below100" ? item.price < 100 : 
    filter === "above100" ? item.price >= 100 : true
  );

  // Search logic: Filter items by name based on the search term
  filteredItems = filteredItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mt-4">
      {/* Heading with Vegetable Emojis */}
      <h1 className="text-center mb-4">
        <span role="img" aria-label="Capsicum">🌶️</span>
        <span role="img" aria-label="Cauliflower">🥦</span> 
        Veg Items
        <span role="img" aria-label="Potato">🥔</span>
        <span role="img" aria-label="Tomato">🍅</span>
        
      
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
            placeholder="Search Veg Items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Price Filter */}
      <div className="d-flex gap-3 mb-3">
        {["all", "below100", "above100"].map(type => (
          <label key={type} className="form-check-label d-flex align-items-center gap-2">
            <input 
              type="radio" 
              className="form-check-input" 
              checked={filter === type} 
              onChange={() => setFilter(type)} 
            />
            <strong>{type === "all" ? "Show All" : type === "below100" ? "Below $100" : "Above $100"}</strong>
          </label>
        ))}
      </div>

      {/* Display Veg Items */}
      {filteredItems.length > 0 ? (
        <div className="row">
          {filteredItems.map(item => (
            <article key={item.id} className="col-md-4 mb-4">
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
            </article>
          ))}
        </div>
      ) : (
        <p className="text-danger text-center">No items available...</p>
      )}
    </section>
  );
}

export default VegItems;
