import { useState } from "react";
import InputForm from "../../Elements/InputForm";
import FileUpload from "../../Elements/basic/FileUpload";
import TextArea from "../../Elements/basic/TextArea";
import Button from "../../Elements/basic/Button";
import MemberSourceAPI from "../../../api/resources/sourceMember";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FormRegisterMember = () => {
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState("");
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    major: "",
    npm: "",
    whatsappNumber: "",
    address: "",
    bio: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: name === "username" ? value.toLowerCase() : value,
    });
  };

  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", memberData.name);
    data.append("email", memberData.email);
    data.append("username", memberData.username);
    data.append("password", memberData.password);
    data.append("major", selectedMajor);
    data.append("npm", memberData.npm);
    data.append("whatsappNumber", memberData.whatsappNumber);
    data.append("address", memberData.address);
    data.append("bio", memberData.bio);
    data.append("ktmImage", imageFile);

    try {
      const response = await MemberSourceAPI.postMember(data);
      ToastNotification.toastSuccess(response);
      navigate("/login");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <InputForm
            id="name"
            name="name"
            type="text"
            placeholder="Nama lengkap"
            value={memberData.name}
            onChange={handleInputChange}
            className="sm:col-span-3"
            required
          >
            Nama
          </InputForm>
          <InputForm
            id="email"
            name="email"
            type="email"
            placeholder="Email aktif"
            value={memberData.email}
            onChange={handleInputChange}
            className="sm:col-span-3"
            required
          >
            Email
          </InputForm>
          <InputForm
            id="username"
            name="username"
            type="text"
            placeholder="userexample"
            value={memberData.username}
            onChange={handleInputChange}
            className="sm:col-span-3"
            required
          >
            Username
          </InputForm>

          <div className="relative sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Masukkan password"
                value={memberData.password}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md mt-2 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
              >
                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEyeSlash : faEye}
                />
              </button>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="major"
              className="block mb-3 text-sm font-semibold text-gray-900"
            >
              Jurusan
            </label>
            <select
              id="major"
              name="major"
              value={selectedMajor}
              onChange={handleMajorChange}
              className="block w-full rounded-md mt-2 border-0 py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              required
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
            name="npm"
            type="text"
            placeholder="NPM"
            value={memberData.npm}
            onChange={handleInputChange}
            className="sm:col-span-3"
            required
          >
            NPM
          </InputForm>
          <FileUpload
            id="ktmImage"
            name="ktmImage"
            label="Bukti Foto KTM"
            onChange={handleImageChange}
            containerClassName="sm:col-span-6"
          />
          <InputForm
            id="whatsappNumber"
            name="whatsappNumber"
            type="text"
            placeholder="Nomor WhatsApp yang dapat dihubungi"
            value={memberData.whatsappNumber}
            onChange={handleInputChange}
            className="sm:col-span-6"
            required
          >
            Nomor WhatsApp
          </InputForm>
          <InputForm
            id="address"
            name="address"
            type="text"
            placeholder="Alamat atau lokasi usaha"
            value={memberData.address}
            onChange={handleInputChange}
            className="sm:col-span-6"
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
            onChange={handleInputChange}
            containerClassName="sm:col-span-6"
          />
        </div>
        <Button type="submit" label="Daftar" className="w-full mt-6"></Button>
      </form>
    </div>
  );
};

export default FormRegisterMember;
