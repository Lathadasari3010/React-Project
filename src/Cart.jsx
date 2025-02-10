import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, purchaseDetails, remove } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    let dispatch = useDispatch();
    let cartObjects = useSelector(state => state.cart);

    let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // Discount State
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false);
    let discountAmount = (totalPrice * discountPercentage) / 100;

    // Coupon State
    const [cuponCode, setCuponCode] = useState('');
    const [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);
    const [showCuponApplied, setShowCuponApplied] = useState(false);

    // Loan EMI State (Only applicable if total price > 1000)
    const [principal, setPrincipal] = useState(500000);
    const [months, setMonths] = useState(12);
    const interestRate = 10;

    let handleCoupon = () => {
        switch (cuponCode.toUpperCase()) {
            case 'LATHA10': setCuponCodeDiscountPer(10); setShowCuponApplied(true); break;
            case 'LATHA20': setCuponCodeDiscountPer(20); setShowCuponApplied(true); break;
            case 'LATHA30': setCuponCodeDiscountPer(30); setShowCuponApplied(true); break;
            case 'LATHA40': setCuponCodeDiscountPer(40); setShowCuponApplied(true); break;
            default: alert("Invalid coupon code"); setCuponCodeDiscountPer(0); setShowCuponApplied(false);
        }
    };

    let couponDiscountAmount = (totalPrice * cuponCodeDiscountPer) / 100;
    let finalPrice = totalPrice - discountAmount - couponDiscountAmount;

    // EMI Calculation
    const calculateEmi = (P, N, annualRate) => {
        let R = annualRate / 12 / 100;
        let Emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        return Emi.toFixed(2);
    };

    const completePurchase = () => {
        let purchaseDate = new Date().toLocaleString();
        let handlePurchase = {
            date: purchaseDate,
            items: [...cartObjects],
            totalAmount: totalPrice.toFixed(2),
            finalAmount: finalPrice.toFixed(2),
        };
        dispatch(purchaseDetails(handlePurchase));
        dispatch(clearCart());
    };

    return (
        <div className="container mt-5">
            {cartObjects.length > 0 ? (
                <>
                    <h1 className="mb-4 text-center">Your Cart 🛒</h1>

                    <ul className="list-group mb-4">
                        {cartObjects.map((item, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center gap-3">
                                <img src={item.image} alt={item.name} className="rounded" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-bold">{item.name}</h6>
                                    <p className="mb-0 text-success fw-semibold">${item.price}</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <button onClick={() => dispatch(increment(item))} className="btn btn-sm btn-success">+</button>
                                    <button onClick={() => dispatch(decrement(item))} className="btn btn-sm btn-danger">-</button>
                                    <span className="fw-bold">Quantity: {item.quantity}</span>
                                    <button onClick={() => dispatch(remove(item))} className="btn btn-sm btn-warning">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="text-danger fw-bold">Your Total Price: ${totalPrice.toFixed(2)}</p>

                    {/* Discount Section */}
                    <div className="mb-3 d-flex gap-2">
                        <button className="btn btn-outline-primary" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% Discount</button>
                        <button className="btn btn-outline-primary" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% Discount</button>
                        <button className="btn btn-outline-primary" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% Discount</button>
                    </div>

                    {showDiscount && (
                        <div className="alert alert-info">
                            <p>Your Discount Applied: {discountPercentage}%</p>
                            <p>Your Discount Amount: ${discountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Coupon Section */}
                    <div className="mb-3">
                        <input
                            type="text"
                            value={cuponCode}
                            onChange={(e) => setCuponCode(e.target.value)}
                            className="form-control"
                            placeholder="Enter coupon code"
                        />
                    </div>

                    <button className="btn btn-outline-success mb-3 w-100" onClick={handleCoupon}>Apply Coupon</button>

                    {showCuponApplied && (
                        <div className="alert alert-success">
                            <p>Your Coupon Code: {cuponCode}</p>
                            <p>Your Coupon Discount: ${couponDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    <p className="fw-bold">Net Amount to Pay: ${finalPrice.toFixed(2)}</p>

                    <button className="btn btn-primary btn-lg w-100" onClick={completePurchase}>Complete Purchase</button>
                </>
            ) : (
                <div className="text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" width="200" />
                    <h2 className="text-secondary mt-3">Your Cart is Empty</h2>
                    <p className="text-muted">Looks like you haven't added anything yet. Start shopping now!</p>
                    <a href="/home" className="btn btn-primary">Browse Products</a>
                </div>
            )}

            {/* Loan EMI Calculator (Only if total price > 1000) */}
            {totalPrice > 1000 && (
                <div className="card p-4 mt-5 shadow-lg">
                    <h2 className="text-center mb-3">Loan EMI Calculator</h2>

                    <div className="mb-3">
                        <label className="form-label">Principal Amount: ${principal.toLocaleString()}</label>
                        <input type="range"
                            min="10000"
                            max="1000000"
                            value={principal}
                            step="5000"
                            onChange={(e) => setPrincipal(parseInt(e.target.value))}
                            className="form-range"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Loan Tenure: {months} months</label>
                        <input type="range"
                            min="6"
                            max="60"
                            value={months}
                            step="1"
                            onChange={(e) => setMonths(parseInt(e.target.value))}
                            className="form-range"
                        />
                    </div>

                    <div className="alert alert-info text-center">
                        <h3>Monthly EMI: ${calculateEmi(principal, months, interestRate)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
