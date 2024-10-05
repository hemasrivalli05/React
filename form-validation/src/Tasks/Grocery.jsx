// import React from 'react';
import './list.css';
import List from "./List";

const Grocery = () => {
  let obj = [
    { item: "Milk", price: 100, id: 1 },
    { item: "Sugar", price: 400, id: 2 },
    { item: "Flour", price: 250, id: 3 },
    { item: "Rice", price: 550, id: 4 },
    { item: "Juice", price: 300, id: 5 },
    { item: "Bread", price: 200, id: 6 },
    { item: "DryFruits", price: 600, id: 7 },
    { item: "Maggie", price: 450, id: 8 },
  ];

  return (
    <div>
      {obj.map((product) => (
        <List key={product.id} item={product.item} price={product.price} />
      ))}
    </div>
  );
};

export default Grocery;
