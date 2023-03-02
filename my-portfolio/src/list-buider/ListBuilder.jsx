function ListBuilder() {
  const list = ["APPLE", "DELL", "ASUS", "HP", "ACER", "SAMSUNG"];
  return (
    <div className="ListBuilder">
      <div className="Input">
        <input />
        <button>Add</button>
      </div>
      <div className="Output">
        <ul>
          {list.map((item, index) => {
            return <li key = {index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export { ListBuilder };
