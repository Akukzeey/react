import React,{useState, useEffect,useRef} from "react";
import "../style.css"



const Dropdown = ({options,selected,onSelectedChange,label,category}) => {
    const [open,setOpen]=useState(false)
    const ref=useRef()


    useEffect(()=>{
        const onBodyClick=(event) => {
            if (ref.current.contains(event.target)){
                return setOpen(true)
            }
            setOpen(false)
        }


        document.body.addEventListener('click',onBodyClick);

        return ()=>{
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])



   const renderedOptions = options.map((option)=>{
      if (option.value===selected.value) {
          return null;
      }

     return (
         <div
             className="item"
             key={option.value}
             onClick={()=>onSelectedChange(option)}
         >
           {option.label}
         </div>
     )
   })

    const renderedColor = options.map((option)=>{
        const pickedColor=option.value
        if (pickedColor === selected.value)
            return(
                <h1 className={pickedColor} key={option.value}>The {category} is {pickedColor}</h1>
            )
    })


  return (
      <div className='container'>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
              onClick={()=>setOpen(!open)}
              className={`ui selection dropdown ${open ? 'visible active':''}`}>
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition':''} `}>{renderedOptions}</div>
          </div>
        </div>
      </div>
          {/*{renderedColor}*/}
      </div>
  )
}

export default  Dropdown