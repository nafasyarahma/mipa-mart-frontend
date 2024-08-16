import RadioOptionPayment from "../../Elements/RadioOptionPayment";
import FileUpload from "../../Elements/basic/FileUpload";


const OrderPayments = ({paymentMethods, selectedPaymentMethod, onChangePaymentMethod, onFileChange }) => {
  return (
    <div>
      <p className="text-xl font-medium mb-2">Metode Pembayaran</p>
      <p className="text-gray-400 mb-6">
        Pilih salah satu metode pembayaran yang disediakan.
      </p>

      <div className="mt-6">
        {paymentMethods.length > 0 ? (
          paymentMethods.map((method) => (
            <RadioOptionPayment
              key={method.id}
              id={method.id}
              provider={method.provider}
              no_account={method.no_account}
              name={method.name}
              checked={selectedPaymentMethod === method.id}
              onChange={onChangePaymentMethod}
            />
          ))
        ) : (
          <p>Tidak ada metode pembayaran</p>
        )}
        <div className="mt-6">
          <FileUpload label="Bukti Transfer" onChange={onFileChange}></FileUpload>
        </div>
      </div>
    </div>
  );
};

export default OrderPayments;
