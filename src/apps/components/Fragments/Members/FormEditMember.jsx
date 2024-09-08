import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import TextArea from "../../Elements/basic/TextArea.jsx";

const FormEditMember = ({ subTitle, memberData, handleChange, handleSumbit }) => {

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSumbit} className="space-y-6 mt-4">
        <InputForm
          id="email"
          name="email"
          type="email"
          value={memberData.email}
          onChange={handleChange}
          placeholder="Email aktif"
          required
        >
          Email
        </InputForm>
        <InputForm
          id="password"
          name="password"
          type="password"
          placeholder="****"
          value={memberData.password}
          onChange={handleChange}
          required
        >
          Password
        </InputForm>
        <InputForm
          id="name"
          name="name"
          type="text"
          placeholder="Nama lengkap"
          value={memberData.name}
          onChange={handleChange}
          required
        >
          Nama
        </InputForm>
        <InputForm
          id="no_wa"
          name="no_wa"
          type="text"
          placeholder="Nomor WhatsApp yang dapat dihubungi"
          value={memberData.no_wa}
          onChange={handleChange}
          required
        >
          Nomor WhatsApp
        </InputForm>
        <InputForm
          id="address"
          name="address"
          type="text"
          placeholder="Alamat atau tempat tinggal saat ini"
          value={memberData.address}
          onChange={handleChange}
          required
        >
          Alamat
        </InputForm>
        <TextArea
          id="bio"
          name="bio"
          label="Bio"
          placeholder="Jelaskan tentang informasi usaha Anda seperti produk yang ditawarkan sosial media dll..."
          value={memberData.bio}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
        </div>
      </form>
    </>
  );
};

export default FormEditMember;
