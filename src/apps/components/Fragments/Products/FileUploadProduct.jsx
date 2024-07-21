import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const FileUploadProduct = ({ images, onChange }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  
  useEffect(() => {
    if (images && images.length > 0) {
      const initialPreviews = images.map((img) => ({
        file: img.file || null,
        url: img.url || URL.createObjectURL(img.file),
        isRemoved: false
      }));
      setImagePreviews(initialPreviews);
    }
  }, [images]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      isRemoved: false
    }));

    const updatedPreviews = [...imagePreviews, ...newPreviews];
    setImagePreviews(updatedPreviews);
    onChange(updatedPreviews);
  };

  // const removeFile = (index) => {
   
  //   const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
  //   console.log(updatedPreviews)
  //   setImagePreviews(updatedPreviews);
  //   onChange(updatedPreviews);
  // };

  const removeFile = (index) => {
    const updatedPreviews = imagePreviews.map((img, i) => {
      if (i === index) {
        return { ...img, isRemoved: true };
      }
      return img
    });

    setImagePreviews(updatedPreviews);
    onChange(updatedPreviews);
  }

  return (
    <div
      aria-label="File Upload Modal"
      className="relative h-full flex flex-col bg-white shadow-xl rounded-md border"
    >
      <section className="h-full overflow-auto p-4 w-full h-full flex flex-col">
        <header className="border-dashed border-2 border-gray-400 py-8 flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
            <span>Upload produk images</span>
          </p>
          <input
            id="file-input"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-input"
            className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none cursor-pointer"
          >
            Upload a file
          </label>
        </header>

        <h1 className="pt-4 pb-3 font-semibold  text-gray-900">To Upload</h1>

        <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
          {imagePreviews.length > 0 ? (
            imagePreviews.map((img, index) => 
              !img.isRemoved && (
              <li
                key={index}
                className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24"
              >
                <div className="group hasImage w-full h-full rounded-md bg-gray-100 relative text-transparent hover:text-white shadow-sm">
                  <img
                    alt="upload preview"
                    className="img-preview w-full h-full object-cover rounded-md bg-fixed"
                    src={img.url}
                    onLoad={() => img.file && URL.revokeObjectURL(img.url)}
                  />
                  {imagePreviews.length > 1 && (
                  <section className="flex flex-col text-xs w-full h-full z-20 absolute top-0 py-1 px-2">
                    <div className="flex">
                      <button
                        className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-white"
                        onClick={() => removeFile(index)}
                        disabled={imagePreviews.length === 1}
                      >
                        <FontAwesomeIcon icon={faXmark} size="xl" />
                      </button>
                    </div>
                  </section>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li
              id="empty"
              className="h-full w-full text-center flex flex-col items-center justify-center mb-4"
            >
              <span className="text-small text-gray-400">
                No files selected
              </span>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default FileUploadProduct;
