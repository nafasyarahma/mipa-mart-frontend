import { useState, useEffect } from "react";
import OrderSummary from "../Fragments/Orders/OrderSummary";
import OrderDeliveries from "../Fragments/Orders/OrderDeliveries";
import OrderPayments from "../Fragments/Orders/OrderPayments";
import Button from "../Elements/basic/Button";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "../Elements/basic/TextArea";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import ToastNotification from "../assets/helpers/ToastNotification";

const CheckoutLayout = () => {
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [deliveryMethods, setDeliveryMenthods] = useState([]);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);
  const [paymentImage, setPaymentImage] = useState(null);
  const [note, setNote] = useState("")

  useEffect(() => {
    const fetchSellerPaymentMethods = async () => {
      try {
        const response = await CustomerSourceAPI.getSellerPaymentMethods();
        setPaymentMethods(response.paymentMethods);
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    fetchSellerPaymentMethods();
  }, []);

  useEffect(() => {
    const fetchSellerDeliveryMethods = async () => {
      try {
        const response = await CustomerSourceAPI.getSellerDeliveryMethods();
        setDeliveryMenthods(response.deliveryMethods);
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    fetchSellerDeliveryMethods();
  }, []);

  const handlePaymentMethodChange = (methodId) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleDeliveryMethodChange = (methodId) => {
    setSelectedDeliveryMethod(methodId);
  };

  const handleFileChange = (e) => {
    setPaymentImage(e.target.files[0]);
  };

  const handleOrderNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("paymentMethodId", selectedPaymentMethod);
    data.append("deliveryMethodId", selectedDeliveryMethod);
    data.append("paymentImage", paymentImage)
    data.append("note", note);
    console.log(data)

    try {
      const response = await CustomerSourceAPI.postOrder(data);
      ToastNotification.toastSuccess(response);
      navigate("/customer/orders")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  }


  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20">
      <div className="px-6">
        <OrderSummary />
        <OrderDeliveries
          deliveryMethods={deliveryMethods}
          selectedDeliveryMethod={selectedDeliveryMethod}
          onChangeDeliveryMethod={handleDeliveryMethodChange}
        />
      </div>

      <div className="mt-10 px-4 lg:mt-0">
        <OrderPayments
          paymentMethods={paymentMethods}
          selectedPaymentMethod={selectedPaymentMethod}
          onChangePaymentMethod={handlePaymentMethodChange}
          onFileChange={handleFileChange}
        />

        <TextArea
          id="note"
          name="note"
          label="Catatan"
          placeholder="Berikan catatan tambahan mengenai pesanan ..."
          containerClassName="mt-6"
          value={note}
          onChange={handleOrderNoteChange}
        ></TextArea>

        <div className="mt-8">
            <Button label="Pesan" className="w-full mb-4" onClick={handleSubmit} />
          <Link to="/customer/cart">
            <Button label="Batal" className="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
