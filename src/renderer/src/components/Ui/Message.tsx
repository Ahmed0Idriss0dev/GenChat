interface Message{
  text:string ,
  role:string 
}
const Message = ({role , text}:Message) => {
  switch(role){
    case "Model":
       return (
        <div className="flex justify-start items-center w-full">
        <div className="max-w-[70%] min-w-5 h-max p-3 border text-neutral-800 ">
          <span>{text} </span>
        </div>
        </div>
       )
      
    
    default :
     return (
      <div className="flex justify-end items-center w-full">
      <div className="max-w-[70%] w-max h-max  p-3 rounded-3xl bg-blue-200  ">
        <span>{text} </span>
      </div>
    </div>
     )
  }
}

export default Message