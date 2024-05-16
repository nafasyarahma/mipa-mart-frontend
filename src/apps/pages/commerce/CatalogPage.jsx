import CommerceLayout from "../../components/Layouts/CommerceLayout"
import SearchBar from "../../components/Elements/SearchBar"
import CardProduct from "../../components/Elements/CardProduct"

const CatalogPage = () => {
  return (
    <CommerceLayout>
      <div className="lg:flex justify-between items-center">
        <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">Semua Produk</h1>
        <SearchBar></SearchBar>
      </div>
      <div className="mt-10 grid sm:grid-cols-3 xl:grid-cols-4 gap-4">
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
      </div>
    </CommerceLayout>
  )
}

export default CatalogPage