import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";

const FormAddCategory = ({ subTitle }) => {
  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form className="space-y-6 mt-4" action="#" method="POST">
        <InputForm
          id="category"
          htmlFor="category"
          type="text"
          placeholder="Contoh: Makanan, Minuman, Aksesoris, dsb."
          required
        >
          Nama Kategori
        </InputForm>
        <InputForm
          id="category_desc"
          htmlFor="category_desc"
          type="text"
          placeholder="Deskripsi kategori"
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

export default FormAddCategory;
