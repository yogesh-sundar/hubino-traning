import React, { useState } from 'react';

function StateList() {
    const [data, setData] = useState(["yogesh", "Yo", "Yo yo"]);

  const handleClick = () => {
    setData([]);
  };

  const retainClick = () => {
    setData(["yogesh", "Yo", "Yo yo"]);
  };

  return (
    <div>
        
        <ul>
          {data.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      <button onClick={handleClick}>Clear</button>
      <button onClick={retainClick}>Redo</button>
    </div>
  );
}

export default StateList;