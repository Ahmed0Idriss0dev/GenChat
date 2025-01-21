import Logo from '../../assets/logo.svg'
const Loader = () => {
  return (
    <div className='w-max flex justify-start items-center'>
        <img className='animate-pulse' src={Logo} width={50} height={50} />
        <div className="w-[200px] animate-pulse h-11 bg-neutral-100 rounded-md "></div>
    </div>
  )
}

export default Loader