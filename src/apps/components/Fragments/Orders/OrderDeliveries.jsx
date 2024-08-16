import RadioOptionDelivery from "../../Elements/RadioOptionDelivery";

const OrderDeliveries = ({deliveryMethods, selectedDeliveryMethod, onChangeDeliveryMethod}) => {
  return (
    <div>
      <p className="mt-8 text-lg font-medium mb-2">Metode Pengiriman</p>
      <p className="text-gray-400 mb-6">
        Pilih salah satu metode pengiriman yang disediakan.
      </p>
        <div className="mt-6">
          {deliveryMethods.length > 0 ? (
            deliveryMethods.map((method) => (
              <RadioOptionDelivery 
              key={method.id}
              id={method.id}
              method={method.method}
              description={method.description}
              checked={selectedDeliveryMethod === method.id}
              onChange={onChangeDeliveryMethod}
              />
            ))
          ) : (
            <p>Tidak ada metode pengiriman</p>
          )}
      </div>
    </div>
  );
};

export default OrderDeliveries;
