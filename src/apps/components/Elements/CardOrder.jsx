import { Link } from "react-router-dom"

const CardOrder = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 content-center">
    <div className="flex justify-between px-2">
      <p>Nabila Putri</p>
      <p className="bg-purple-500 text-white text-sm rounded-lg px-2 py-1">
        Pending
      </p>
    </div>
    <div className="flex flex-row rounded-lg bg-white p-2">
      <img
        className="h-16 w-24 rounded-md border object-cover object-center"
        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="flex w-full flex-col justify-between px-4">
        <p className="text-gray-600">Sepatu Adidos</p>
        <div className="flex justify-between">
          <p className="font-semibold">$138.99</p>
          <p className="text-gray-500">x1</p>
        </div>
      </div>
    </div>
    <div className="pt-4 border-t">
      <Link to="/customer/order/detail">
      <p className="text-sm text-center text-gray-400 hover:text-purple-500">Tampilkan Detail</p>
      </Link>
    </div>
    <div className="flex justify-between font-bold px-2 pt-4 border-t">
      <p>Total Bayar</p>
      <p>Rp50.000</p>
    </div>
  </div>
  )
}

export default CardOrder