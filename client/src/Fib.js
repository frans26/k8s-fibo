import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {index});
    setIndex('');

    fetchValues();
    fetchIndexes();
  }

  const renderSeenIndexes = () => {
    return seenIndexes.map(({number}) => number).join(', ');
  }

  const renderValue = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key}, I calculated {values[key]}
        </div>
      );
    }

    return entries;
  }

  const fetchValues = () => {
    axios.get('/api/values/current')
      .then(res => {
        setValues(res.data);
      });
  }

  const fetchIndexes = () => {
    axios.get('/api/values/all')
      .then(res => {
        setSeenIndexes(res.data);
      });
  }

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  return (
    <div>
      <h2>Fibonacci Calculator</h2>

      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values:</h3>
      {renderValue()}
    </div>
  )
}

export default Fib;