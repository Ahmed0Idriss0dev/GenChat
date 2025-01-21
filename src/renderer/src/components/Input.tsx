import { Code, Database, Lightbulb, Send } from "lucide-react"
import Button from "./Ui/Button"
import { useRef, useState } from "react"
import Buttons from "@renderer/Types"
import myStrore from "@renderer/store"

const Buttondata:Buttons[] =[
  {
    ButtonType:"Code",
    icon:<Code/>,
    text:"Code" ,
    
  } ,
  {
    ButtonType:"dataBase",
    icon:<Database/>,
    text:"dataBase" ,
    
  } ,
  {
    ButtonType:"Ideas",
    icon:<Lightbulb/>,
    text:"Ideas" ,
    
  }
]
const Input = () => {
  const {setType} = myStrore()
  const MyRef = useRef<HTMLTextAreaElement>(null)
  const {setData ,setInDatabase} = myStrore()
  const [Inputarea , SetInputArea] = useState<string>('')
  if(MyRef.current){
      MyRef.current.addEventListener('keydown', async (e:KeyboardEvent)=>{
         if(e.key==="enter" ){
             sendTextToModel()
         }
    })
  }
  function sendTextToModel(){
    if(MyRef.current){
      setData(true)
      setInDatabase({role:"user",parts:[{text:MyRef.current.value}]})
      SetInputArea('')

    }
  }
  return (
    <div className={`w-full p-3 border flex flex-col gap-1 h-[150px]  rounded-2xl bg-blue-50 noddarg `}>
        <textarea ref={MyRef} value={Inputarea} autoFocus={true} onChange={(e)=>SetInputArea(e.target.value)} className="bg-transparent w-full h-full outline-none resize-none placeholder:text-neutral-400" placeholder="ask for something ..."/>
        <div className="w-full h-[50px] flex gap-1 justify-end items-center  ">
        {Buttondata.map(({ButtonType , icon , text})=>(
          <Button  click={()=>setType(ButtonType)} ButtonType={ButtonType} icon={icon} text={text} />
        ))}
        <button onClick={sendTextToModel} className="w-12 flex justify-center items-center h-11  text-blue-700 rounded-md "><Send/></button>
        </div>
    </div>
  )
}

export default Input