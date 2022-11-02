import react,{useState} from 'react'


const Quiz = () => {
    const [number,setNumber]=useState(0)

    const onButtonClick = () => {
      setNumber(number+1)
    }



  return(
      <div>
          <button onClick={onButtonClick}>Click Me</button>
          <h1>Current Count : {number}</h1>
      </div>
  )
}


export default Quiz