import CardDashboard from "../../Elements/CardDashbooard"

const CardsDashboardAdmin = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <CardDashboard color="green" title="Total Akun Member" count="20" icon="fa-solid fa-user-check" ></CardDashboard>
      <CardDashboard color="red" title="Total Akun Customer" count="50" icon="fa-solid fa-user-tag" ></CardDashboard>
      <CardDashboard color="blue" title="Total Kategori" count="8" icon="fa-solid fa-layer-group" ></CardDashboard>
    </div>
  )
}

export default CardsDashboardAdmin