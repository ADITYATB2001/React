import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    

<div style = {{height:"100vh",background:color}}> 

  <button style={{margin:"50px",backgroundColor:"red",padding:"10px",borderRadius:"10px","font-Weight":100,color:"black"}} onClick={()=>setColor("red")}>Red</button>
  <button style={{margin:"50px",backgroundColor:"green",padding:"10px",borderRadius:"10px"}} onClick={()=>setColor("green")}>Green</button>
  <button style={{margin:"50px",backgroundColor:"blue",padding:"10px",borderRadius:"10px"}} onClick={()=>setColor("blue")}>Blue</button>
  </div>
    
  )
}

export default App
