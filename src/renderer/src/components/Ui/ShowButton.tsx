import { Play } from "lucide-react"
import Button from "./Button"

const ShowButton = () => {
  return (
    <div className="w-max translate-y-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:-translate-y-5 p-4 rounded-full bottom-9 absolute overflow-hidden border bg-white h-max flex justify-start gap-3 items-center ">
      <Button ButtonType="Code" icon={<Play/>} text="Run" click={()=>console.log('hi')}/>
      <Button ButtonType="dataBase" icon text="Save as File" click={()=>console.log('hi')}/>

    </div>
  )
}

export default ShowButton