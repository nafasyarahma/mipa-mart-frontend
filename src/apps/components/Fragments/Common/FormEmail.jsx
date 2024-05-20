import InputForm from "../../Elements/InputForm"
import Button from "../../Elements/basic/Button"

const FormEmail = () => {
  return (
    <form className="space-y-6 mt-10" action="#" method="POST">
    <InputForm
      id="email"
      type="email"
      placeholder="Email terdaftar"
      required
    >
      Email
    </InputForm>
    <Button type="submit" className="w-full" label="Kirim"></Button>
  </form>
  )
}

export default FormEmail