import Motion from "./Motion"

const Ai = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <Motion/>
    <div className="text-center">
    <h1 className='text-transparent bg-clip-text text-2xl bg-gradient-to-tr from-red-400 to-blue-600'>Welcome to Genchat</h1>
    <p className="opacity-70 text-sm">GenChat is A nice chat assistant for you  , base on Google Geminy</p>
    </div>
  </div>  )
}

export default Ai