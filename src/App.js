import  React, { useState } from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState(["Hello, there."]);
  const [entry, setEntry] = useState('');
  const [reply, setReply] = useState(entries[Math.floor(Math.random() * entries.length)]);

  return (
    <div className="App">
      <div className="Output">
        <p>{reply}</p>
      </div>

      {/*
        I plan on adding React-Bootstrap to make the UI prettier.
      */}

      <div className="Input">
        <form>
          <input 
            placeholder="Chat with me..."
            name="entry" value={entry}
            onChange={(e) => setEntry(e.target.value)}>
          </input>
          <button 
            onPointerDown={() => {
              setEntries([...entries, entry])
              setReply(entries[Math.floor(Math.random() * entries.length)])
            }}
            type="button" >
              Enter
            </button>
        </form>
      </div>
    </div>
  );
}

export default App;
