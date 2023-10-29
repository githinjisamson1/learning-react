import React, { useState } from "react";

const ArrayState = () => {
  // state
  const [items, setItems] = useState([]);

  // eventHandler
  const handleAddValue = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  
  return (
    <div>
      <button onClick={handleAddValue}>Add value</button>
      <ul>
        {items.map((item) => {
          const { id, value } = item;
          return (
            <li key={id}>
              {id} {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArrayState;
