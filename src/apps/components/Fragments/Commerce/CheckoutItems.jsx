import CheckoutItem from "../../Elements/basic/CheckoutItem";
import formatingPrices from "../../../utils/fotmattingPrices";

const CheckoutItems = ({ cart }) => {
  return (
    <div className="rounded-lg border p-4 space-y-3">
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((item) => (
          <CheckoutItem
            key={item.id}
            item={item}
            formatingPrices={formatingPrices}
          />
        ))
      ) : (
        <p>Tidak ada item yang ditambahkan</p>
      )}
      <div className="flex justify-between font-bold px-2 pt-4 border-t">
        <p>Total Bayar</p>
        <p>{formatingPrices(cart.total_price)}</p>
      </div>
    </div>
  );
};

export default CheckoutItems;
