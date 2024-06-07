const CustomerInfo = ({order}) => {
  const orderCustomer = order?.customer || '';
  
  return (
    <div className="rounded-lg border p-4">
      <h2 className="font-semibold mb-3">Customer Info</h2>
      <div className="mb-2">
        <p className="font-semibold text-sm">Nama</p>
        <p className="text-gray-500 text-sm">{orderCustomer.name}</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">WhatsApp</p>
        <p className="text-gray-500 text-sm">{orderCustomer.no_wa}</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Email</p>
        <p className="text-gray-500 text-sm">{orderCustomer.email}</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-sm">Alamat</p>
        <p className="text-gray-500 text-sm">
          {orderCustomer.address} 
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
