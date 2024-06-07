const OrderDetailNote = ({order}) => {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="font-semibold mb-3">Catatan Pesanan</h2>
      <div className="text-gray-500 text-sm">
        {order.note}
      </div>
    </div>
  );
};

export default OrderDetailNote;
