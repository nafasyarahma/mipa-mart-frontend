const RadioOptionPayment = ({ id, provider, no_account, name, checked, onChange }) => {
  return (
    <div className="relative mb-3">
      <input
        className="peer hidden"
        id={id}
        type="radio"
        name="payment_method"
        checked={checked}
        onChange={() => onChange(id)}
      />
      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
      <label
        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
        htmlFor={id}
      >
        <div className="ml-2">
          <span className="mt-2 font-semibold text-gray-600">{provider}</span>
          {no_account && name ? (
            <p className="font-semibold text-gray-500 text-sm leading-6 mr-8">
            {no_account} a.n. <span className="uppercase">{name}</span>
          </p>
          ): (
            <p>-</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default RadioOptionPayment;
