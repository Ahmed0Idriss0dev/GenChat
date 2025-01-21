import video from '../assets/motion.mp4'
const Motion = () => {
  return (
    <video className='w-[300px] h-[300px] ' src={video} loop autoPlay muted ></video>
  )
}

export default Motion