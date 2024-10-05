// import React from 'react';
// import Style from '.list';

const List = (props) => {
  let { item, price } = props;

  // Determine the class based on the price
  const itemClass = price > 500 ? "item red" : "item orange";

  return (
    <div className={itemClass}>
      <span>{item}</span>
      <span>{price}</span>
    </div>
  );
};

export default List;
