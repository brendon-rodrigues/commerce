import React, {useState} from "react"

export default function App (){
  const [input, setInput] = useState()
  const [name, setName] = useState()
  const nomeDoClient = ()=>{
    setName(input)
  }
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      setName(input)
    }}>
    <input value={input} onChange={(e)=>{
      setInput(e.target.value)
    }}/>
    
    <h1> Obrigado por comprar {name} </h1>
    <h2> O nome correto é BISCOITO e não BOLACHA</h2>
    </form> 
  )
}