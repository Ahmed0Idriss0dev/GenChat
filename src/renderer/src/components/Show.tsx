import myStrore from "@renderer/store"
import ShowButton from "./Ui/ShowButton"

const Show = () => {
  const {Type} = myStrore()
  return (
    <div className='w-full group relative  rounded-br-3xl hidden p-3 md:block border-l h-full bg-blue-50'>
        <textarea className="w-full text-neutral-700 bg-transparent outline-none h-full rounded-br-3xl resize-none" name="" id="" placeholder={Type && `//@Type ${Type} selected`} ></textarea>
        <ShowButton/>
    </div>
  )
}

export default Show