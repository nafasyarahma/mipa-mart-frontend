const InputForm = (props) => {
  const { name, id, children, type, placeholder, required, disabled, className } = props;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {children}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled} 
        className="block w-full rounded-md mt-2 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
