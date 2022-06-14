import React from "react"
import ThreeDotsButton from "./ThreeDotsButton"
import DropdownCard from "./DropdownCard"
import style from "./ThreeDotsButtonDropdown.module.scss"

const sampleData = new Array(3).fill("Remove")

const ThreeDotsButtonDropdown = () => {
  const [open, setOpen] = React.useState(false)
  const drop = React.useRef(null)

  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClick)
    
    return () => {
      document.removeEventListener("click", handleClick)
    }
  })

  return (
    <div className={style.dropdown} ref={drop}>
      <ThreeDotsButton onClick={() => setOpen(open => !open)} />
      {open && <DropdownCard data={sampleData} setOpen={setOpen} />}
    </div>
  )
}

export default ThreeDotsButtonDropdown
