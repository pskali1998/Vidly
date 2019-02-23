import React from "react";
const ListGroup = props => {
  const {
    items,
    textProperty,
    valuePropery,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valuePropery]}
          onClick={() => onItemSelect(item)}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valuePropery: "_id"
};

export default ListGroup;
