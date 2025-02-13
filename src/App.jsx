import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Login from "./Login";
import { logout } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import Fruits from "./Fruits";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MilkItems from "./MilkItems";

function App() {
  let cart = useSelector((state) => state.cart);
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg container-fluid" style={{ backgroundColor: "#007bff" }}>
       

        <Link to="/home" className="navbar-brand text-white">
          <i className="fa-solid fa-house"></i> Home
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/veg" className="nav-link text-white"><i className="fa-solid fa-carrot"></i> VegItems</Link></li>
            <li className="nav-item"><Link to="/nonveg" className="nav-link text-white"><i className="fa-solid fa-drumstick-bite"></i> NonVeg</Link></li>
            <li className="nav-item"><Link to="/fruits" className="nav-link text-white"><i className="fa-solid fa-apple-whole"></i> Fruits</Link></li>
            <li className="nav-item"><Link to="/milk" className="nav-link text-white"><i class="fa-solid fa-cow"></i>Milk Products</Link></li>

            <li className="nav-item"><Link to="/orders" className="nav-link text-white"><i className="fa-solid fa-clock-rotate-left"></i> Orders</Link></li>
            <li className="nav-item"><Link to="/aboutus" className="nav-link text-white"><i className="fa-solid fa-address-card"></i> About Us</Link></li>
            <li className="nav-item"><Link to="/contactus" className="nav-link text-white"><i className="fa-solid fa-phone-volume"></i> Contact Us</Link></li>
          </ul>
          <Link to="/cart" className="btn btn-outline-light me-3">
            <i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-danger">{totalItems}</span>
          </Link>
          {isAuthenticated ? (
            <>
              <span className="text-white me-3">Welcome, {user}!</span>
              <button onClick={() => dispatch(logout())} className="btn btn-danger">Sign Out</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-success">Sign In</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<VegItems />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milk" element={<MilkItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Default NotFound route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
