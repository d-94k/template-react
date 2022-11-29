import React, { useState } from "react";

const FormTest = (props) => {
  const [form, setForm] = useState({
    name: "daniele",
    price: "1000€",
    link: "my-link",
    des: "add short des",
  });

  const trackValue = (e) => {
    let value = e.target.value;

    setForm({ ...form, [e.target.id]: value });
  };
  //   const itemValue = (e) => {
  //     e.preventDefault();
  //     props.render(itemName, itemLink, price, des);
  //   };
  const addFormCard = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={addFormCard}>
        <label htmlFor="name">Enter name</label>
        <input type="text" id="name" value={form.name} onChange={trackValue} />
        <label htmlFor="price">Add the price</label>
        <input
          type="text"
          id="price"
          value={form.price}
          onChange={trackValue}
        />
        <label htmlFor="link">Add link </label>
        <input type="text" id="link" value={form.link} onChange={trackValue} />
        <textarea
          id="des"
          cols="30"
          rows="10"
          value={form.des}
          onChange={trackValue}
        >
          Add description
        </textarea>
        <button type="submit">Add card</button>
      </form>
    </div>
  );
};

export default FormTest;
