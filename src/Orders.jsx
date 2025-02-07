import { useSelector } from "react-redux";

function Orders() {
    let orderItems = useSelector(state => state.purchase) || [];

    let orders = orderItems.map((order, index) => (
        <div key={index} className="mb-4 p-3 border rounded">
            <p className="text-fuchsia">Date: {order.date}</p>
            <ul className="list-group">
                {order.items.map((pdetails, ind) => (
                    <li key={ind} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{pdetails.name} - ${pdetails.price} × {pdetails.quantity}</span>
                    </li>
                ))}
            </ul>
            <p className="text-danger mt-2">Total Amount: ${order.totalAmount}</p>
            <p className="text-primary">Net Amount to Pay: ${order.finalAmount}</p>
        </div>
    ));

    return (
        <>
            {orders.length > 0 ? (
                <div className="container mt-5">
                    <h1 className="mb-4">Your Orders</h1>
                    {orders}
                </div>
            ) : (
                <div className="container mt-5">
                    <p className="text-cursive">No Orders Available Up to Now...</p>
                </div>
            )}
        </>
    );
}

export default Orders;
