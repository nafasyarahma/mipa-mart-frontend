const SellerInfo = ({order}) => {
  const orderSeller = order?.member || '';

  return (
    <div className="rounded-lg border p-4">
      <h2 className="font-semibold mb-3">Seller Info</h2>
      <div className="mb-2">
        <p className="font-semibold text-sm">Nama</p>
        <p className="text-gray-500 text-sm">{orderSeller.name}</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Kontak</p>
        <p className="text-gray-500 text-sm">{orderSeller.no_wa}</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Alamat</p>
        <p className="text-gray-500 text-sm">
          {orderSeller.address}
        </p>
      </div>
    </div>
  );
};

export default SellerInfo;
