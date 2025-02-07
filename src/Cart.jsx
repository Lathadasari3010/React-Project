import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, purchaseDetails, remove } from "./store";
import { useState } from "react";

function Cart() {
    // Get the cart from store
    let dispatch = useDispatch();
    let cartObjects = useSelector(state => state.cart);

    // Convert above objects into <li> list of items
    let cartItems = cartObjects.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ${item.price}</span>
            <div>
                <button onClick={() => dispatch(increment(item))} className="btn btn-success btn-sm mx-1">+</button>
                <button onClick={() => dispatch(decrement(item))} className="btn btn-danger btn-sm mx-1">-</button>
                Quantity: {item.quantity}
                <button onClick={() => dispatch(remove(item))} className="btn btn-warning btn-sm mx-2">Remove</button>
            </div>
        </li>
    ));

    // Calculate the Total Price
    let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // Set the discount percentage
    const [discountPercentage, setDiscountPercentage] = useState(0);

    // Take the state variable showDiscount set to false
    const [showDiscount, setShowDiscount] = useState(false);

    // Calculate the discount amount
    let discountAmount = (totalPrice * discountPercentage) / 100;

    // Set the cupon code
    const [cuponCode, setCuponCode] = useState('');

    // Set the cupon code discount percentage
    const [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);

    // Take the state variable showCuponApplied set to false
    const [showCuponApplied, setShowCuponApplied] = useState(false);

    // Get cupon percentage based on cupon
    let handlingCuponPer = () => {
        switch (cuponCode.toUpperCase()) {
            case 'LATHA10':
                setCuponCodeDiscountPer(10);
                setShowCuponApplied(true);
                break;
            case 'LATHA20':
                setCuponCodeDiscountPer(20);
                setShowCuponApplied(true);
                break;
            case 'LATHA30':
                setCuponCodeDiscountPer(30);
                setShowCuponApplied(true);
                break;
            case 'LATHA40':
                setCuponCodeDiscountPer(40);
                setShowCuponApplied(true);
                break;
            default:
                alert("Invalid cupon code");
                setCuponCodeDiscountPer(0);
                setShowCuponApplied(false);
        }
    };

    // Calculate the cupon discount
    let cuponDiscountAmount = (totalPrice * cuponCodeDiscountPer) / 100;

    // Calculate the final price
    let finalPrice = totalPrice - discountAmount - cuponDiscountAmount;

    const completePurchase = () => {
        let purchaseDate = new Date().toLocaleDateString();
        let handlePurchase = {
            date: purchaseDate,
            items: [...cartObjects],
            totalAmount: totalPrice.toFixed(2),
            finalAmount: finalPrice.toFixed(2)
        };
        dispatch(purchaseDetails(handlePurchase));
        dispatch(clearCart());
    };

    return (
        <>
            {cartObjects.length > 0 ?
                <div className="container mt-5">
                    <h1 className="mb-4">Your Cart</h1>

                    <ul className="list-group mb-4">
                        {cartItems}
                    </ul>

                    <p className="text-danger font-weight-bold">Your Total Price: ${totalPrice.toFixed(2)}</p>

                    {/* Discount Section */}
                    {showDiscount &&
                        <div className="alert alert-info">
                            <p>Your Discount Applied: {discountPercentage}%</p>
                            <p>Your Discount Amount: ${discountAmount.toFixed(2)}</p>
                        </div>
                    }

                    {/* Final Price */}
                    <p className="font-weight-bold">Net Amount to Pay: ${finalPrice.toFixed(2)}</p>

                    {/* Discount Buttons */}
                    <div className="mb-3">
                        <button className="btn btn-outline-primary me-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% Discount</button>
                        <button className="btn btn-outline-primary me-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% Discount</button>
                        <button className="btn btn-outline-primary" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% Discount</button>
                    </div>

                    {/* Cupon Section */}
                    <div className="mb-3">
                        <input
                            type="text"
                            value={cuponCode}
                            onChange={(e) => setCuponCode(e.target.value)}
                            className="form-control"
                            placeholder="Enter cupon code"
                        />
                    </div>
                    <button className="btn btn-outline-success mb-3" onClick={() => { handlingCuponPer(); setShowCuponApplied(true); }}>Apply Cupon</button>

                    {showCuponApplied &&
                        <div className="alert alert-success">
                            <p>Your Cupon Code: {cuponCode}</p>
                            <p>Your Cupon Discount: ${cuponDiscountAmount.toFixed(2)}</p>
                        </div>
                    }

                    <button className="btn btn-primary" onClick={completePurchase}>Complete Purchase</button>
                </div>
                :
                <div className="container mt-5">
                    <p>Your Cart is Empty</p>
                </div>
            }
        </>
    );
}

export default Cart;
