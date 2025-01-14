import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Mogaya", "Mwita", "Boke", "Chacha", "Marwa"];
  //   items = [];
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>Names</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
