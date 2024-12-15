import { useEffect, useState } from "react"


const Timer = () => {

    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
      setInterval( () => setSegundos(s => s + 1) , 1000)
    }, [])
    

  return (
    <div>Timer : {segundos} </div>
  )
}

export default Timer