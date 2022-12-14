import React, { useState } from "react";

const Form = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemLinkHandler = (e) => {
    setItemLink(e.target.value);
  };
  const itemPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const itemDesHandler = (e) => {
    setDes(e.target.value);
  };
  const itemValue = (e) => {
    e.preventDefault();
    const obj = {
      name: itemName,
      price: price,
      image: itemLink,
      description: des
    }
    props.render(obj);
  };
  return (
    <div>
      <form action="" onSubmit={itemValue}>
        <label htmlFor="image-link">Enter image link</label>
        <input
          value={itemLink}
          type="text"
          placeholder="insert image link"
          id="imagelink"
          onChange={itemLinkHandler}
        />
        <label htmlFor="name">Enter name</label>
        <input
          value={itemName}
          type="text"
          placeholder="insert image link"
          id="name"
          onChange={itemNameHandler}
        />
        <label htmlFor="price">Enter price</label>
        <input
          value={price}
          type="text"
          placeholder="insert image link"
          id="price"
          onChange={itemPriceHandler}
        />
        <textarea
          value={des}
          name="image-des"
          id="des"
          cols="30"
          rows="10"
          onChange={itemDesHandler}
        ></textarea>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;
