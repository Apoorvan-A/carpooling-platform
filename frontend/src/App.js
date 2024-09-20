import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/') // Adjust this URL if your backend runs on a different port
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data from backend:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Carpooling App</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
