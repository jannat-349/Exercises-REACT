import { useState } from "react";
function ListInput({handleOnChange, handleOnClick}) {
  return (
    <div className="Input">
      <input onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}
function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  function handleOnChange(event) {
    setNewItem(event.target.value);
  }
  function handleOnClick() {
    if (!newItem) {
      return;
    }
    setList([...list, newItem]);
  }
  return (
    <div className="ListBuilder">
      <ListInput
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />
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
