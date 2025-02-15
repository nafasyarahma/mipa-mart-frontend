const FileUpload = ({id, onChange, multiple, required, label, containerClassName}) => {
  return (
    <div className={containerClassName}>
      <label
        className="block mb-2 text-sm font-semibold text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="block p-1.5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        aria-describedby="file_input_help"
        id={id}
        type="file"
        multiple={multiple}
        onChange={onChange}
        required={required}
      />
      <p
        className="mt-1 text-xs text-gray-500"
        id="file_input_help"
      >
        JPG, JPEG, or PNG (max. 5mb)
      </p>
    </div>
  );
};

export default FileUpload;
