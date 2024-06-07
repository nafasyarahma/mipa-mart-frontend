import InputForm from "../../Elements/InputForm";
import Button from "../../Elements/basic/Button";

const FormEmail = ({ email, onSubmit, onChange }) => {
  return (
    <form className="space-y-6 mt-10" onSubmit={onSubmit}>
      <InputForm
        id="email"
        name="email"
        type="email"
        placeholder="Email terdaftar"
        value={email}
        onChange={onChange}
        required
      >
        Email
      </InputForm>
      <Button type="submit" className="w-full" label="Kirim"></Button>
    </form>
  );
};

export default FormEmail;
