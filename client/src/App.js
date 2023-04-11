
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
"Adams",
"Baker",
"Clark",
"Davis",
"Evans",
"Frank",
"Ghosh",
"Hills",
"Irwin",
"Jones",
"Klein",
"Lopez",
"Mason",
"Nalty",
"Ochoa",
"Patel"
  ])
  const [input, setInput] = useState('');
  const handleChange =(event)=>{
    setInput(event.target.value);
  }
  const result = data.filter(item =>  item.toLowerCase().includes(input.toLocaleLowerCase()) )

  return (
    <div className="App">
     <input type='text' value={input} placeholder='search' className='searchinput' onChange={handleChange}></input>
     <div>
      {input? <div>{result.map(e=> <h2 key={e}>{e}</h2>)}</div> : <></>}      
     </div>

    </div>
  );
}

export default App;
