import OrderProduct from "../../Elements/OrderProduct";

const OrderProducts = ({order}) => {
  const orderProducts = order?.products || [];

  return (
    <div className="rounded-lg border p-4 space-y-3">
      {orderProducts.length > 0 ? (
            order.products.map((product) => (
              <OrderProduct
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>Order Anda kosong</p>
          )}
      <div className="flex justify-between font-bold px-2 pt-4 border-t">
        <p>Total Bayar</p>
        <p>Rp{order.total_price}</p>
      </div>
    </div>
  );
};

export default OrderProducts;
