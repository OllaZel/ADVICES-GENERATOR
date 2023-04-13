import './App.css';
import { useState, useEffect } from 'react';

function App() {

const [advice, setAdvice] = useState("");

useEffect( ()=> {
  getAdvice();
}, []
)

const getAdvice = async() => {
  const response = await fetch(`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setAdvice(data.activity);
}


  return (
    <div className="App">
      <h1>advices generator</h1>
      <h2 className='text'>{advice}</h2>
      <button className='btn' onClick={getAdvice}>Click here</button>
    </div>
  );
}

export default App;
