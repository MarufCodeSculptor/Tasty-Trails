const MyCart = () => {
  return (
    <div className="font-cinzel">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <h2 className="text-4xl font-bold">Total orders: 6</h2>
        </div>
        <div className="min-w-24 min-h-5 ">
          <h2 className="text-4xl font-bold"> Total Price  </h2>

        </div>
        <div className="min-w-24 min-h-5">
          <button className="btn bg-dashboardbg"> Pay</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
