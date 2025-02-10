import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Orders() {
    let orderItems = useSelector(state => state.purchase) || [];

    return (
        <div className="container mt-5">
            {orderItems.length > 0 ? (
                <>
                    <h1 className="mb-4 text-center text-danger">
                        Your Orders <span role="img" aria-label="congratulations">🎉</span>
                    </h1>
                    <p className="text-success text-center fs-5">You can view your orders here!</p>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Date</th>
                                    <th>Order Details</th>
                                    <th>Total Amount</th>
                                    <th>Net Amount to Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map((order, index) => (
                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#D0F0C0' : '#B2EBF2' }}>
                                        {/* Order Date Column */}
                                        <td className="align-middle fw-bold text-primary">{order.date}</td>

                                        {/* Order Details Column */}
                                        <td className="align-middle">
                                            <ul className="list-unstyled mb-0">
                                                {order.items.map((pdetails, ind) => (
                                                    <li key={ind} className="d-flex align-items-center mb-2">
                                                        <img 
                                                            src={pdetails.image} 
                                                            alt={pdetails.name} 
                                                            className="me-2" 
                                                            width="50" 
                                                            height="50" 
                                                            style={{ borderRadius: '8px' }} 
                                                        />
                                                        <span className="text-dark">{pdetails.name} - ${pdetails.price} × {pdetails.quantity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>

                                        {/* Total & Net Amount Columns */}
                                        <td className="align-middle text-danger fw-bold">${order.totalAmount}</td>
                                        <td className="align-middle text-success fw-bold">${order.finalAmount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
                        alt="No Orders" 
                        width="150" 
                    />
                    <h2 className="text-danger mt-3">No Orders Available</h2>
                    <p className="text-muted">It looks like you haven't placed any orders yet.</p>
                    <Link to="/" className="btn btn-primary mt-4">Start Shopping</Link>

                   
                </div>
            )}
        </div>
    );
}

export default Orders;
