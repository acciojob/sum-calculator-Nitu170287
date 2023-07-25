
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [addInput, setAddInput] = useState()
  const [sum, setSum] = useState(0)

  function findSum(){
    setSum(sum+ (addInput?addInput:0))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e)=>{setAddInput(Number(e.target.value));findSum()
        }} value={addInput}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
