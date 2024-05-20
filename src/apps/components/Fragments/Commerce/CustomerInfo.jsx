const CustomerInfo = () => {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="font-semibold mb-3">Customer Info</h2>
      <div className="mb-2">
        <p className="font-semibold text-sm">Nama</p>
        <p className="text-gray-500 text-sm">Nabila Putri</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">WhatsApp</p>
        <p className="text-gray-500 text-sm">082297319309</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Email</p>
        <p className="text-gray-500 text-sm">nabilaput@gmail.com</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Alamat</p>
        <p className="text-gray-500 text-sm">
          Jalan Abdul Muis IX Gedong Meneng
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
