import myStrore from "@renderer/store"
import Loader from "./Ui/Loader"
import Message from "./Ui/Message"

const Room = () => {
  const {isResponed ,data}= myStrore()
  return (
    <div className="w-full relative space-y-1 p-5 overflow-y-auto max-h-[60%] h-[60%]  ">
      {data && data.map(({role , parts:[{text}] }, index)=>(
        <Message role={role} key={index} text={text} />
      ))}
      {!isResponed && <Loader/>}
     
    </div>

  )
}

export default Room