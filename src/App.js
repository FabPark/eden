import { useState } from "react"

const Hi = () => {
  return (
    <div> Hi there. </div>
  )
}
function App() {
 const [number, setNumber] = useState(0);

 const add = () => {
  setNumber(number + 1)
 }

 return (
  <div className="App">
    <Hi />
    <div> Number={number}</div>
    <button onClick = {add}>Add</button>
    </div>

  );
 }

export default App;
