import { useState } from 'react'


function App() {

  let [counter,setCounter] = useState(0)

  const addvalue=()=>{
    if(counter+1>20){
      alert("Exceed")
    }
    else{
    setCounter(counter+1)
    }
  }

  const removeValue = ()=>{

    if (counter-1<0) {alert("reduced")}
    else {setCounter(counter-1)}
  }

  return (
<>
  <h1>Counter App</h1>
  <button onClick={addvalue}>Add value {counter}</button>
  <br />
  <button onClick={removeValue}>Remove value {counter}</button>
  </>
  )
}

export default App
