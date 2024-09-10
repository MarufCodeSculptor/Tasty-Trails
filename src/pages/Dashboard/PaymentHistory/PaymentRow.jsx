const PaymentRow = ({ index, item }) => {
  const { email, price, transactionId, status } = item;

  return (
    <tr>
      <th> {index + 1} </th>
      <td> {price} </td>
      <td>{transactionId}</td>
      <th>{email}</th>
      <td> {status} </td>
    </tr>
  );
};

export default PaymentRow;
