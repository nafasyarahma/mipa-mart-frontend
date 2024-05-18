import RadioOptionDelivery from "../../Elements/RadioOptionDelivery";

const OrderDeliveries = () => {
  return (
    <div>
      <p className="mt-8 text-lg font-medium">Metode Pengiriman</p>
      <form className="mt-5 grid gap-6">
        <RadioOptionDelivery name="delivery" methodName="COD sekitar Unila">
          Tempat di beringin cinta atau tulis di note saat order untuk waktu
          silahkan wa terlebih dulu
        </RadioOptionDelivery>
      </form>
    </div>
  );
};

export default OrderDeliveries;
