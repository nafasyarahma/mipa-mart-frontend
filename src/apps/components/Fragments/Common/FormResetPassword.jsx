import InputForm from "../../Elements/InputForm";
import Button from "../../Elements/basic/Button";

const FormResetPassword = ({ onSubmit, passwordData, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 mt-10">
      <InputForm
        id="password"
        name="password"
        type="password"
        placeholder="Password baru"
        value={passwordData.password}
        onChange={onChange}
        required
      >
        Password Baru
      </InputForm>
      <InputForm
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="Ulangi password baru"
        value={passwordData.confirmPassword}
        onChange={onChange}
        required
      >
        Ulangi Password Baru
      </InputForm>
      <Button type="submit" className="w-full" label="Simpan"></Button>
    </form>
  );
};

export default FormResetPassword;
