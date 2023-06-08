import { useEffect, useState } from 'react';
import './App.css';
import Advice from './components/Advice';
import Button from './components/Button';

function App() {

  const [adviceApi, setAdviceApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdviceApi([data.slip]);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const handleSubmit = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdviceApi([data.slip]);
    
   }

  return (
    <main className="App">
      <div className='container'>
      <Advice  adviceApi={adviceApi}/>
      <Button  handleSubmit={handleSubmit}/>
      </div>
    </main>
  );
}

export default App;
