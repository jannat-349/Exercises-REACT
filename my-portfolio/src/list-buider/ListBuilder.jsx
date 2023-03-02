import { useState } from "react";

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  function handleOnChange(event) {
    setNewItem(event.target.value);
  }
  function handleOnClick() {
    if(!newItem) {
        return;
    }
    setList([...list, newItem]);
  }
  return (
    <div className="ListBuilder">
      <div className="Input">
        <input onChange={handleOnChange} />
        <button onClick={handleOnClick}>Add</button>
      </div>
      <div className="Output">
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export { ListBuilder };
