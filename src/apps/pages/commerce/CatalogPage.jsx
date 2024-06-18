import CommerceLayout from "../../components/Layouts/CommerceLayout";
import SearchBar from "../../components/Elements/SearchBar";
import ProductCards from "../../components/Fragments/Commerce/ProductCards";
import { useEffect, useState } from "react";
import ProductSourceAPI from "../../api/resources/sourceProduct";
import CategorySourceAPI from "../../api/resources/sourceCategory";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch products based on search query
  const fetchProducts = async (query, category) => {
    setLoading(true);
    try {
      const response = await ProductSourceAPI.getAllProducts(query, category);
      setProducts(response.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts("", "");
    const fetchCategories = async () => {
      try {
        const response = await CategorySourceAPI.getAllCategories();
        setCategories(response.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts(searchQuery, selectedCategory);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    fetchProducts(searchQuery, category);
  };

  return (
    <CommerceLayout>
      <div className="lg:flex justify-between items-center">
        <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">
          Semua Produk
        </h1>
        <div className="flex flex-row items-center gap-6 ml-auto">
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-100 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          <SearchBar
            value={searchQuery}
            onSubmit={handleSearchSubmit}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        ;
      </div>
      
      {products.length > 0 ? (
        <ProductCards products={products} loading={loading} />
      ) : (
        <div className="mt-20">
          <p className="text-center text-lg text-gray-400 italic">Tidak ada produk</p>
        </div>
      )}
      
    </CommerceLayout>
  );
};

export default CatalogPage;
