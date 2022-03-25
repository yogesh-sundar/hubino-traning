import React, { useEffect, useState } from 'react';
import StateList from './StateList';

function Time() {
    const [date, setDate] = useState([]);
  const [name, setName] = useState("");

  let time = new Date();

  useEffect(() => {
    setTimeout(() => {
      setDate(time.toLocaleTimeString());
      setName("yogesh")
    }, 1000);
  }, [time]);

  return (<div style={{ fontSize: "40px" }}>
      {date}
      <p>{time.toLocaleTimeString()}</p>
      <h2>{name}</h2>
            <StateList />
        </div>
    );
}

export default Time;