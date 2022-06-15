import React, {useState} from "react"
import "./App.css"
export default function App (){
  const [input, setInput] = useState()
  const [name, setName] = useState()
  const nomeDoClient = ()=>{
    setName(input)
  }
  return (
    <>
    <h1 id="title">Loja do Brendon.</h1>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setName(input)
    }}>
    <input value={input} onChange={(e)=>{
      setInput(e.target.value)
    }}/>
    
    <h1> Obrigado por comprar {name} </h1>
    </form> 
    </>
  )
}