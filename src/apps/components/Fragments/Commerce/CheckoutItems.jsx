import CheckoutItem from "../../Elements/basic/CheckoutItem";

const CheckoutItems = ({cart, totalPrice}) => {
  return (
    <div className="rounded-lg border p-4 space-y-3">
      {cart.length > 0 ? (
            cart.map((item) => (
              <CheckoutItem
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <p>Keranjang Anda kosong</p>
          )}
      <div className="flex justify-between font-bold px-2 pt-4 border-t">
        <p>Total Bayar</p>
        <p>Rp{totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutItems;
