import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import TextArea from "../../Elements/basic/TextArea.jsx";

const FormEditMember = ({ subTitle }) => {
  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form className="space-y-6 mt-4" action="#" method="POST">
        <InputForm
          id="username"
          type="text"
          placeholder="userexample"
          required
          disabled
        >
          Username
        </InputForm>
        <InputForm id="email" type="email" placeholder="Email aktif" required>
          Email
        </InputForm>
        <InputForm id="password" type="password" placeholder="****" required>
          Password
        </InputForm>
        <InputForm id="name" type="text" placeholder="Nama lengkap" required>
          Nama
        </InputForm>
        <InputForm
          id="no_wa"
          type="text"
          placeholder="Nomor WhatsApp yang dapat dihubungi"
          required
        >
          Nomor WhatsApp
        </InputForm>
        <InputForm
          id="address"
          type="text"
          placeholder="Alamat atau tempat tinggal saat ini"
          required
        >
          Alamat
        </InputForm>
        <TextArea
          id="bio"
          label="Bio"
          placeholder="Jelaskan tentang informasi usaha Anda seperti produk yang ditawarkan sosial media dll..."
        />
      </form>
      <div className="flex justify-end">
        <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
      </div>
    </>
  );
};

export default FormEditMember;
