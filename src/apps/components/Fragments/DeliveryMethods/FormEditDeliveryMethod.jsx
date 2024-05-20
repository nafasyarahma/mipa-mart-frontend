import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";

const FormEditDeliveryMethod = ({ subTitle }) => {
  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form className="space-y-6 mt-4" action="#" method="PUT">
        <InputForm
          id="delivery_method"
          htmlFor="delivery_method"
          type="text"
          placeholder="Metode pengiriman/pengambilan barang"
          required
          disabled
        >
          Metode
        </InputForm>
        <InputForm
          id="delivery_note"
          htmlFor="delivery_note"
          type="text"
          placeholder="Informasi/catatan tambahan untuk customer"
          required
        >
          Deskripsi
        </InputForm>
      </form>
      <div className="flex justify-end">
        <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
      </div>
    </>
  );
};

export default FormEditDeliveryMethod;
