"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [item, setItem] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [unitPrice, setUnitPrice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
  }, [quantity, unitPrice]);

  const handleSubmit = () => {
    if (!item || !quantity || !unitPrice) {
      window.alert("Please make sure all the required fields are filled");
      return;
  }
  else
    console.log({item, description, quantity, unitPrice, totalPrice});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display: "flex", flexDirection: "column", padding: "20px"}}>
          <label>
            Item:
            <input
              className="border-2 dark:border-black"
              type="text"
              name="item"
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <input
              className="border-2 dark:border-black"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Quantity:
            <input
              className="border-2 dark:border-black"
              type="number"
              name="quantity"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </label>
          <label>
            Unit Price:
            <input
              className="border-2 dark:border-black"
              type="number"
              name="unit_price"
              onChange={(e) => setUnitPrice(parseInt(e.target.value))}
              required
            />
          </label>
          <label>
            Total Price:
            <input
              className="border-2 dark:border-black"
              type="number"
              name="total_price"
              onChange={(e) => setUnitPrice(parseInt(e.target.value))}
              disabled
              value={totalPrice}
            />
          </label>
        </div>
      </form>
      <button onClick={handleSubmit} type="submit" value="submit" className="border-2 dark:border-black"> SUBMIT </button>
    </div>
  );
}
