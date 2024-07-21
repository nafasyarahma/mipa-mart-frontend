
const ProductReviews = () => {
  // if (!reviews || reviews.length === 0) {
  //   return <p className="text-gray-500">Belum ada ulasan untuk produk ini.</p>;
  // }

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Ulasan Pembeli</h2>
      <div className=" flex">
        {/* {reviews.map((review, index) => ( */}
          <div  className="p-4 border rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div>
                <p className="font-semibold">Agnes Monica</p>
                <p className="text-gray-500 text-sm">14 Juli 2025</p>
              </div>
            </div>
            <div className="text-gray-700">Seger banget bikin nagih</div>  
          </div>
          <div  className="p-4 border rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div>
                <p className="font-semibold">Agnes Monica</p>
                <p className="text-gray-500 text-sm">14 Juli 2025</p>
              </div>
            </div>
            <div className="text-gray-700">Seger banget bikin nagih</div>  
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ProductReviews;
