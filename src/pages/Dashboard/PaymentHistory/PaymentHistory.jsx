import usePaymentHistory from "../../../hooks/usePaymentHistory";


const PaymentHistory = () => {

    const [paymenthistory] = usePaymentHistory();

    return (
        <>
            <div className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-base">
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            paymenthistory.map(single => <tr key={single._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={single.image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{single.name}</td>
                                <td>{single.price}</td>
                                <td>{single.transactionId}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default PaymentHistory;