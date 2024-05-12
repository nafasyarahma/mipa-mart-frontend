import InputForm from "../../Elements/InputForm";
import useSelect from "../../../../hooks/userSelect";
import FileUpload from "../../Elements/FileUpload";
import TextArea from "../../Elements/TextArea";

const FormRegisterMember = () => {
  const { selectedValue, handleChange } = useSelect("");

  return (
    <div className="mx-auto max-w-xl">
      <form action="#">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <InputForm
            id="name"
            type="text"
            placeholder="Nama lengkap"
            className="sm:col-span-3"
            required
          >
            Nama
          </InputForm>
          <InputForm
            id="email"
            type="email"
            placeholder="Email aktif"
            className="sm:col-span-3"
            required
          >
            Email
          </InputForm>
          <InputForm
            id="username"
            type="text"
            placeholder="userexample"
            className="sm:col-span-3"
            required
          >
            Username
          </InputForm>
          <InputForm
            id="password"
            type="password"
            placeholder="****"
            className="sm:col-span-3"
            required
          >
            Password
          </InputForm>
          <div className="sm:col-span-3">
            <label
              htmlFor="major"
              className="block mb-3 text-sm font-semibold text-gray-900"
            >
              Jurusan
            </label>
            <select
              id="major"
              value={selectedValue}
              onChange={handleChange}
              className="block w-full rounded-md mt-2 border-0 py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <option value="">Pilih Jurusan</option>
              <option value="biologi">Biologi</option>
              <option value="fisika">Fisika</option>
              <option value="kimia">Kimia</option>
              <option value="matematika">Matematika</option>
              <option value="ilmu_komputer">Ilmu Komputer</option>
            </select>
          </div>
          <InputForm
            id="npm"
            type="text"
            placeholder="NPM"
            className="sm:col-span-3"
            required
          >
            NPM
          </InputForm>
          <FileUpload
            id="ktm_images"
            label="Bukti Foto KTM"
            containerClassName="sm:col-span-6"
          />
          <InputForm
            id="no_wa"
            type="text"
            placeholder="Nomor WhatsApp yang dapat dihubungi"
            className="sm:col-span-6"
            required
          >
            Nomor WhatsApp
          </InputForm>
          <InputForm
            id="address"
            type="text"
            placeholder="Alamat atau tempat tinggal saat ini"
            className="sm:col-span-6"
            required
          >
            Alamat
          </InputForm>
          <TextArea
            id="bio"
            label="Bio"
            placeholder="Jelaskan tentang informasi usaha Anda seperti produk yang ditawarkan sosial media dll..."
            containerClassName="sm:col-span-6"
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegisterMember;
