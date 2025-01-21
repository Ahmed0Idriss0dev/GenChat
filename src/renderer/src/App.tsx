import Ai from "./components/Ai"
import Frame from "./components/Frame"
import Input from "./components/Input"
import Room from "./components/Room"
import Show from "./components/Show"
import myStrore from "./store"
const App = () => {
  const {isAsk} = myStrore()
  return (
    <div className="w-full bg-bg-color  z-50 h-dvh flex flex-col justify-between items-center    bg-white rounded-md">
     <Frame/>
     <div className="grid grid-cols-1 w-full h-full md:grid-cols-2">
     <div className="w-full px-4 space-y-4 flex  flex-col justify-start items-center h-full rounded-md ">
       {isAsk ? <Room/>:<Ai/>}

       <Input/>

       <p className="text-sm text-blue-900 underline opacity-60">Publiched by Ahmed_Idriss.dev@ 2024</p>
     </div>
     <Show/>
     </div>
    </div>
  )
}

export default App