const DashboardLayout = (props) => {
  const { children, pageTitle, pageDescription } = props

  return (
  <div className="p-2 sm:ml-64">
    <div className="p-6 mt-14">
      <h1 className="text-black font-bold text-2xl mb-4">{pageTitle}</h1>
      <p className="text-sm text-gray-400 mb-4">
      {pageDescription}
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
        {children}
      </div>
    </div>
  </div>

)}

export default DashboardLayout