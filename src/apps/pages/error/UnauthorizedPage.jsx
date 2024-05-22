const ForbiddenPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1923.jpg?w=826&t=st=1716386978~exp=1716387578~hmac=24042d68e64421cdc712da488ec69f78189ae09fb3bb420d82d1a695429ac9fc"
          alt='Error 403 Logo'
          className='w-40 md:w-64'
        />
        <h1
          className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Akses Terlarang!
        </h1>

        <p className="mt-4 text-gray-500">Anda Tidak Memiliki akses pada Url Ini!</p>
      </div>
    </div>
  )
}

export default ForbiddenPage