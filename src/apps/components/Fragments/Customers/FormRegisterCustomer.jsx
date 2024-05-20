import InputForm from "../../Elements/InputForm";
import Button from "../../Elements/basic/Button";

const FormRegisterCustomer = () => {
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
        </div>
        <Button label="Daftar" className="w-full mt-6"></Button>
      </form>
    </div>
  );
};

export default FormRegisterCustomer;
