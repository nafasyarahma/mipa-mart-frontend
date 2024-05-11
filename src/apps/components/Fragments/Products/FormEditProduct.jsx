import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/Button.jsx";
import useSelect from "../../../../hooks/userSelect.jsx";
import RadioOption from "../../Elements/RadioOption.jsx";
import TextArea from "../../Elements/TextArea.jsx";
import FileUpload from "../../Elements/FileUpload.jsx";

const FormEditProduct = ({ subTitle }) => {
  const { selectedValue, handleChange } = useSelect("");

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>

      <form className="space-y-6 mt-4" action="#" method="POST">
        <InputForm
          id="product_name"
          htmlFor="product_name"
          type="text"
          placeholder="Nama/judul produk"
          required
        >
          Nama Produk
        </InputForm>
        <InputForm
          id="price"
          htmlFor="price"
          type="number"
          placeholder="Harga produk"
          required
        >
          Harga
        </InputForm>

        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Kategori
          </label>
          <select
            id="category"
            value={selectedValue}
            onChange={handleChange}
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Pilih Kategori</option>
            <option value="id">Makanan</option>
            <option value="id">Minuman</option>
            <option value="id">Pakaian</option>
          </select>
        </div>

        <div className="flex items-center">
          <p className="block text-sm font-semibold text-gray-900 mr-20">
            Status
          </p>
          <RadioOption name="status" id="ready" value="ready" label="Ready" />
          <RadioOption
            name="status"
            id="pre-order"
            value="pre-order"
            label="Pre-Order"
          />
          <RadioOption
            name="status"
            id="soldout"
            value="soldout"
            label="Habis"
          />
        </div>

        <FileUpload id="product_images" label="Foto Produk" multiple />

        <TextArea
          id="product_description"
          label="Deskripsi"
          placeholder="Jelaskan produk secara lengkap..."
        />
      </form>
      <div className="flex justify-end">
        <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
      </div>
    </>
  );
};

export default FormEditProduct;
