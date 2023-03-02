import { useState } from "react";
import { ListInput } from "./ListInput";
import { ListOutput } from "./ListOutput";

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
      <ListOutput list={list} />
    </div>
  );
}

export { ListBuilder };
