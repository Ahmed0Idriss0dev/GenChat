import { create } from "zustand";
interface datatype {
  role: "user"|"Model",
  parts:[
      {text:string}
  ]
}


interface myStroreType {
     isAsk : Boolean ,
     setData:(check:boolean)=> void,
     setInDatabase:(check:datatype)=> void,
     data:datatype[] ,
     isResponed:boolean ,
     setisResponed:(a:boolean)=> void ,
     Type:string ,
     setType:(type:string) => void
}
const myStrore = create<myStroreType>((set)=>({
      isAsk:false ,
      isResponed:false ,
      Type:"",
      data:[] ,
      setData : (check)=> set({isAsk:check}) ,
      setInDatabase : (check)=> set((state)=>({data:[...state.data ,check]})) ,
      setisResponed:(a)=> set({isResponed:a}) ,
      setType: (type)=> set({Type:type}) ,

      
}))
export default myStrore