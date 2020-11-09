import  React, { useState } from 'react';
import './App.css';

function sample(array) {
  if ( array.length === 1 ) {
    return array[0]
  } else if ( array.length > 1) {
    return array[Math.floor(Math.random() * array.length)]
  }

  return null;
}

function App() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  // eslint-disable-next-line
  const [replies, setReplies] = useState([])
  const [reply, setReply] = useState(sample(entries));

  let displayText = (
    <p>Start chatting by typing a message.</p>
  )

  if ( reply ) {
    displayText = (
      <p>{ reply }</p>
    )
  }

  return (
    <div className="App">
      <div className="Output">
        <h1>Transcript</h1>
        <p>{replies.length > 0 ? replies[replies.length - 1] : "..."}</p>
        <p>{entries.length > 0 ? entries[entries.length - 1] : "..."}</p>
      </div>

      <div className="Input">
        { displayText }

        <form>
          <input 
            placeholder="Chat with me..."
            name="entry" value={entry}
            onChange={(e) => setEntry(e.target.value)}>
          </input>
          <button 
            onPointerDown={() => {
              setEntries([...entries, entry])
              setEntry("")
              setReply(sample(entries))
              setReplies([...replies, reply])
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
