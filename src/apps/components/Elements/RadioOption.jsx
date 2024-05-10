const RadioOption = ({id, value, label, name}) => {
  return (
    <div className="flex items-center me-4">
      <input id={id} type="radio" value={value} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-600 ">{label}</label>
    </div>
  )
}

export default RadioOption