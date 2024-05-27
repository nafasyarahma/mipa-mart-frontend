import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import RadioOption from "../../Elements/basic/RadioOption.jsx";
import TextArea from "../../Elements/basic/TextArea.jsx";
import FileUpload from "../../Elements/basic/FileUpload.jsx";
import CategorySourceAPI from "../../../api/resources/sourceCategory.js";
import ProductSourceAPI from "../../../api/resources/sourceProduct.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";2


const FormEditProduct = ({ subTitle }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    status: '',
    productImages: [],
    description: '',
  });
  
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductSourceAPI.getProductById(id);
        const product = response.product;
        setProductData({
          name: product.name,
          price: product.price,
          status: product.status,
          description: product.description,
          productImages: product.productImages,
        });
        setSelectedCategory(product.category?.id || '');
      } catch (error) {
        console.error(error);
      }
    }

  
    const fetchCategories = async () => {
      try {
        const response = await CategorySourceAPI.getAllCategories();
        setCategories(response.categories)
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchProduct();
    fetchCategories();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFileChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      productImages: e.target.files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('status', productData.status);
    formData.append('categoryId', selectedCategory);
    formData.append('description', productData.description);

    Array.from(productData.productImages).forEach((file) => {
      formData.append('productImages', file);
    });

    try {

      const response = await ProductSourceAPI.putProductById(id, formData);
      ToastNotification.toastSuccess(response);
      navigate("/member/products");
    } catch (error) {
      console.log(error.response.data.message);
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <InputForm
          id="name"
          name="name"
          type="text"
          placeholder="Nama/judul produk"
          value={productData.name}
          onChange={handleChange}
          required
        >
          Nama Produk
        </InputForm>
        <InputForm
          id="price"
          name="price"
          type="number"
          placeholder="Harga produk"
          value={productData.price}
          onChange={handleChange}
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
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <p className="block text-sm font-semibold text-gray-900 mr-20">
            Status
          </p>
          <RadioOption 
            name="status" 
            id="ready" 
            value="ready" 
            label="Ready" 
            checked={productData.status === 'ready'}
            onChange={handleChange}
          />
          <RadioOption
            name="status"
            id="preorder"
            value="preorder"
            label="Pre-Order"
            checked={productData.status === 'preorder'}
            onChange={handleChange}
          />
          <RadioOption
            name="status"
            id="soldout"
            value="soldout"
            label="Sold Out"
            checked={productData.status === 'soldout'}
            onChange={handleChange}
          />
        </div>

        <FileUpload 
          id="productImages" 
          label="Foto Produk" 
          onChange={handleFileChange}
          multiple />

        <TextArea
          id="description"
          name="description"
          label="Deskripsi"
          placeholder="Jelaskan produk secara lengkap..."
          value={productData.description}
          onChange={handleChange}
        />
      <div className="flex justify-end">
        <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
      </div>
      </form>
    </>
  );
};

export default FormEditProduct;
