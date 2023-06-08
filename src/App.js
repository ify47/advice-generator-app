import { useEffect, useState } from 'react';
import './App.css';
import Advice from './components/Advice';
import Button from './components/Button';

function App() {

  const [adviceApi, setAdviceApi] = useState({});


  const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdviceApi(data.slip);
    }

    useEffect(() => {         //using useEffect to call the api once the page loads
      fetchData();
    }, []); // Empty dependency array to run the effect only once

    const handleClick = () => {
      fetchData();
    }

  return (
    <main className="App">
      <div className='container'>
      <Advice  adviceApi={adviceApi}/>
      <Button  handleClick={handleClick}/>
      </div>
    </main>
  );
}

export default App;
