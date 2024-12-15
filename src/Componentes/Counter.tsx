import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = (numero : number) => {
        setCounter( counter + numero)
    }

  return (
    <div> 
    <div>Counter</div>
    <span>Valor : { counter }</span>
    <button 
    onClick={()=>incrementar(1)}
    >+1</button>
      <button 
    onClick={()=>incrementar(2)}
    >+2</button>
    <button 
    onClick={()=>setCounter(0)}
    >Reset</button>
    </div>
  )
}

export default Counter