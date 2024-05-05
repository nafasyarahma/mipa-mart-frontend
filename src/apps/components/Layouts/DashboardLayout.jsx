const DashboardLayout = (props) => {
  const { children, pageTitle } = props

  return (
  <div className="p-4 sm:ml-64">
    <div className="p-4 mt-14">
    <h1 className="text-black font-bold text-2xl mb-4">{pageTitle}</h1>
    {children}
    </div>
  </div>

)}

export default DashboardLayout