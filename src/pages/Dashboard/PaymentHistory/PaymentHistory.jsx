import SectionHeading from "../../../Components/SectionHeading";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";
import PaymentRow from "./PaymentRow";

const PaymentHistory = () => {
  const { paymentHistories,refetch } = usePaymentHistory();
  

  return (
    <div>
      <h2>Total Payments: {paymentHistories?.length} </h2>
      <SectionHeading
        heading={"Your payments history"}
        subHeading={"----see here your all payments history------"}
      />

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
               
                <th>price</th>
                <th> TransactionId </th>
                <th>email</th> 
                <th> Status </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistories?.map((item,index) => (
                <PaymentRow key={item._id} item={item} refetch={refetch}  index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
