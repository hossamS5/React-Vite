import './App.css';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setname] = useState<string>('Hossam');

  return (
    <>
      <div className="card">
        <div>
          <h1>{name}</h1>
          <div className="flex items-center gap-2">
            <input onChange={(e) => setname(e.target.value)} />
          </div>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default App;
