const NotFoundPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg?t=st=1716387697~exp=1716391297~hmac=cd1f758233c97e66e19497604ceadda6f9352cb7808e9af3e1a86986488a80ec&w=826"
          alt='Error 404 Logo'
          className='w-40 md:w-64'
        />
        <h1
          className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Halaman Tidak Ditemukan!
        </h1>

        <p className="mt-4 text-gray-500">Pastikan Anda mengakses URL yang benar</p>
      </div>
    </div>
  )
}

export default NotFoundPage