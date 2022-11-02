import React,{useState,useEffect} from "react";
import axios from "axios"


const Quiz2 = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const clients=async () =>{
           const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        }

        clients()
    },[])

    const renderedUsers = users.map((user)=>{
        return <li key={user.id}>{user.name}</li>
    })

  return(
      <div>
          {renderedUsers}
      </div>
  )
}

export default Quiz2