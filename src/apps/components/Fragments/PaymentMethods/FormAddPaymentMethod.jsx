import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import PaymentMethodSourceAPI from "../../../api/resources/sourcePaymentMethod.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";

const FormAddPaymentMethod = ({ subTitle }) => {
  const navigate = useNavigate();

  const [provider, setProvider] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { provider, accountNumber, name };

    try {
      const response = await PaymentMethodSourceAPI.postPaymentMethod(data);
      ToastNotification.toastSuccess(response);
      navigate("/member/payment-methods");
    } catch (error) {
      console.error(error)
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <InputForm
          id="provider"
          name="provider"
          type="text"
          placeholder="Contoh: DANA, BRI, CASH, dsb."
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          required
        >
          Metode Pembayaran
        </InputForm>
        <InputForm
          id="accountNumber"
          name="accountNumber"
          type="text"
          placeholder="Nomor tujuan untuk transfer"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          
        >
          Nomor/Rekening Tujuan
        </InputForm>
        <InputForm
          id="name"
          name="name"
          type="text"
          placeholder="Nama Penerima"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          Atas Nama
        </InputForm>
        <div className="flex justify-end">
          <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
        </div>
      </form>
    </>
  );
};

export default FormAddPaymentMethod;
