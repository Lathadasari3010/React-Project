import { useSelector } from "react-redux";

function Orders() {
    let orderItems = useSelector(state => state.purchase) || [];

    // Group orders by date
    const ordersGroupedByDate = orderItems.reduce((acc, order) => {
        if (!acc[order.date]) {
            acc[order.date] = [];
        }
        acc[order.date].push(order);
        return acc;
    }, {});

    return (
        <div className="container-fluid mt-5" style={{ backgroundColor: '#f4f4f9' }}>
            {Object.keys(ordersGroupedByDate).length > 0 ? (
                <>
                    <h1 className="mb-4 text-center" style={{ color: '#ff6347' }}>
                        Your Orders 
                        <span role="img" aria-label="congratulations">🎉</span>
                    </h1>
                    <p style={{ color: "green", fontFamily: "Arial", fontSize: '22px' }}>You can view your orders here!</p>

                    {/* Loop through each date and display the orders */}
                    {Object.keys(ordersGroupedByDate).map((date, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-center" style={{ color: '#6A0DAD' }}>{date}</h3>
                            
                            <table className="table table-bordered table-striped">
                                {/* Green background for table header */}
                                <thead style={{ backgroundColor: '#FF69B4' }}> {/* Green background */}
                                    <tr>
                                        <th style={{ color: 'black' }}>Order Details</th>
                                        <th style={{ color: 'black' }}>Total Amount</th>
                                        <th style={{ color: 'black' }}>Net Amount to Pay</th>
                                    </tr>
                                </thead>
                                {/* Pink background for table body, Black text color for rows */}
                                <tbody style={{ backgroundColor: 'white', color: 'purple' }}> 
                                    {ordersGroupedByDate[date].map((order, index) => (
                                        <tr 
                                            key={index}
                                            style={{
                                                backgroundColor: '#FFB6C1', // Light pink background for rows
                                                color: 'purple' // Black text color for rows
                                            }}
                                        >
                                            <td>
                                                <ul className="list-unstyled">
                                                    {order.items.map((pdetails, ind) => (
                                                        <li key={ind} className="d-flex justify-content-between align-items-center" style={{ color: '#FF1493' }}>
                                                            {pdetails.name} - ${pdetails.price} × {pdetails.quantity}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td style={{ color: '#FF1493' }}>${order.totalAmount}</td>
                                            <td style={{ color: '#FF1493' }}>${order.finalAmount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className="text-center">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
                            alt="No Orders" 
                            width="150" 
                        />
                        <h2 className="text-secondary mt-3">No Orders Available</h2>
                        <p className="text-muted">It looks like you haven't placed any orders yet.</p>
                        <a href="/home" className="btn btn-primary mt-3">Start Shopping</a>
                    </div>
                </>
            )}
        </div>
    );
}

export default Orders;
