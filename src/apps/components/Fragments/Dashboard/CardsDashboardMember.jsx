import CardDashboard from "../../Elements/CardDashbooard"

const CardsDashboardMember = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <CardDashboard color="green" title="Total Produk" count="25" icon="fa-solid fa-box-open" ></CardDashboard>
      <CardDashboard color="red" title="Total Pesanan" count="70" icon="fa-solid fa-cart-arrow-down" ></CardDashboard>
      <CardDashboard color="blue" title="Total Omzet" count="1,2 Jt" icon="fa-solid fa-money-bill-wave" ></CardDashboard>
    </div>
  )
}

export default CardsDashboardMember