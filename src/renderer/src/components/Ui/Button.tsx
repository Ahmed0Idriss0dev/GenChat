import Buttons from "@renderer/Types";

function Button({click ,icon , text , ButtonType}:Buttons) {
     switch(ButtonType){
         case "Code":
          return (
            <button onClick={click} className="group duration-200 hover:opacity-95 opacity-100 w-max gap-2 px-5 text-blue-700 bg-blue-100 border  text-blue h-10 rounded-full flex justify-center items-center">
            {icon}
            <span>{text} </span>
           </button>
          ) ;
          case "Ideas":
            return (
              <button onClick={click} className="group duration-200 hover:opacity-95 opacity-100 w-max gap-2 px-5 text-yellow-700 bg-yellow-100 border  text-blue h-10 rounded-full flex justify-center items-center">
              {icon}
              <span>{text} </span>
             </button>
            ) ;
            case "dataBase":
              return (
                <button onClick={click} className="group duration-200 hover:opacity-95 opacity-100 w-max gap-2 px-5 text-green-700 bg-green-100 border  text-blue h-10 rounded-full flex justify-center items-center">
                {icon}
                <span>{text} </span>
               </button>
              ) ;
     }
  
}

export default Button