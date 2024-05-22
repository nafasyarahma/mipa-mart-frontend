import CommerceLayout from "../../components/Layouts/CommerceLayout"
import SearchBar from "../../components/Elements/SearchBar"
import ProductCards from "../../components/Fragments/Commerce/ProductCards";

const CatalogPage = () => {
  return (
    <CommerceLayout>
      <div className="lg:flex justify-between items-center">
        <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">Semua Produk</h1>
        <SearchBar/>
      </div>
      <ProductCards/>
    </CommerceLayout>
  )
}

export default CatalogPage