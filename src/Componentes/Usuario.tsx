import { useState } from "react"

interface User {
    uid : number;
    name: string;
} 

const Usuario = () => {
    const [user, setUser] = useState<User>();

    const login = () =>{
        setUser({
            uid: 1,
            name : "Tomas",
        })
    }

  return (
    <div> 
    <div>Usuario</div>
    <button
        onClick={ login }
    >
    Login
    </button>
    <pre>{ JSON.stringify( user )}</pre>
    </div>
  )
}

export default Usuario