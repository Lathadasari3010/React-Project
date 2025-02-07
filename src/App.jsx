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

function App() {
   let cart = useSelector(state => state.cart);
   let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
   
   let auth = useSelector(state => state.auth);
   let isAuthenticated = auth.isAuthenticated;
   let user = auth.user;
   let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#007bff" }}>
        <div className="container-fluid">
          <Link to='/home' className="navbar-brand text-white">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to='/veg' className="nav-link text-white">VegItems</Link></li>
              <li className="nav-item"><Link to='/nonveg' className="nav-link text-white">NonVeg</Link></li>
              <li className="nav-item"><Link to='/fruits' className="nav-link text-white">Fruits</Link></li>
              <li className="nav-item"><Link to='/orders' className="nav-link text-white">Orders</Link></li>
              <li className="nav-item"><Link to='/aboutus' className="nav-link text-white">About Us</Link></li>
              <li className="nav-item"><Link to='/contactus' className="nav-link text-white">Contact Us</Link></li>
            </ul>
            <div className="d-flex align-items-center">
              <Link to='/cart' className="btn btn-outline-light me-3 flex-grow-0">Cart <span className="badge bg-danger">{totalItems}</span></Link>
              {isAuthenticated ? (
                <div className="d-flex align-items-center flex-grow-0">
                  <span className="me-3 text-white">Welcome, {user}!</span>
                  <button onClick={() => dispatch(logout())} className="btn btn-danger">Sign Out</button>
                </div>
              ) : (
                <Link to='/login' className="btn btn-success flex-grow-0">Sign In</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
     
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<VegItems />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/fruits" element={<Fruits/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
