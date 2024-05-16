import RadioOptionPayment from "../../Elements/RadioOptionPayment";
import FileUpload from "../../Elements/FileUpload";
import TextArea from "../../Elements/TextArea";

const OrderPayment = () => {
  return (
    <div>
      <p className="text-xl font-medium">Metode Pembayaran</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>

      <div className="mt-6">
        <RadioOptionPayment
          id="dana"
          methodName="DANA"
          no_account="081927251822"
          ownerName="Nabila Putri"
        />
        <div className="mt-6">
          <FileUpload label="Bukti Transfer"></FileUpload>
        </div>
        <TextArea
          id="order_note"
          label="Catatan"
          placeholder="Berikan catatan tambahan mengenai pesanan ..."
          containerClassName="mt-6"
        ></TextArea>
      </div>
    </div>
  );
};

export default OrderPayment