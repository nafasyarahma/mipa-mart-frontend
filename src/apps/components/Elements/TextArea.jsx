const TextArea = ({ id, label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
