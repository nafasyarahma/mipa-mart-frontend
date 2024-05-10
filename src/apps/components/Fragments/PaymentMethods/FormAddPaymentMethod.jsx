import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/Button.jsx";

const FormAddPaymentMethod = ({ subTitle }) => {
  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>

      <form className="space-y-6 mt-4" action="#" method="POST">
        <InputForm
          id="provider"
          htmlFor="provider"
          type="text"
          placeholder="Contoh: DANA, BRI, CASH, dsb."
          required
        >
          Metode Pembayaran
        </InputForm>
        <InputForm
          id="no_account"
          htmlFor="no_account"
          type="text"
          placeholder="Nomor/Rekening Tujuan"
          required
        >
          Nomor/Rekening Tujuan
        </InputForm>
        <InputForm
          id="name"
          htmlFor="name"
          type="text"
          placeholder="Nama Penerima"
          required
        >
          Atas Nama
        </InputForm>
      </form>
      <div className="flex justify-end">
        <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
      </div>
    </>
  );
};

export default FormAddPaymentMethod;
