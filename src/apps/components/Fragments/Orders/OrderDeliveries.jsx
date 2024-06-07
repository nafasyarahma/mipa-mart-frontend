import RadioOptionDelivery from "../../Elements/RadioOptionDelivery";

const OrderDeliveries = ({deliveryMethods, selectedDeliveryMethod, onChangeDeliveryMethod}) => {
  return (
    <div>
      <p className="mt-8 text-lg font-medium">Metode Pengiriman</p>
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
