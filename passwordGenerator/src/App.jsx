import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(0)
  const [numberGen , setNumberGen] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberGen) str+="0123456789"

    if(charAllowed) str+="!@#$%^&*():{}[]"

    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char)
      
    }
    setPassword(pass)

  },[length,numberGen,charAllowed,password,setPassword])


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,2);
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
passwordGenerator()
  },[length,numberGen,charAllowed])
  return (
    <>
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-x-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
         />

         <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm ga-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>(setLength(e.target.value))}
      />
      <label>Lenght:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type='checkbox'
        defaultChecked={numberGen}
        id="numberInput"
        onChange={()=>{
          setNumberGen((prev)=> !prev)
        }}
      />
      <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type='checkbox'
        defaultChecked={numberGen}
        id="numberInput"
        onChange={()=>{
          setCharAllowed((prev)=> !prev)
        }}
      />
      <label>character</label>
      </div>
      </div>
      </div>


    </>
  )
}

export default App
