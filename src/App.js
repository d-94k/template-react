import "./App.css";
import React, { useContext, useState } from "react";
import Header from "./Layout/Header";
import Items from "./Components/UI/Items";
import { DATA } from "./Database";
import Wrapper from "./Components/UI/Wrapper";

import { FormContext } from "./index";

function App() {
  const [form, trackValue, addFormCard] = useContext(FormContext);
  const [arr, setArr] = useState(DATA);

  const addToForm = () => {
    setArr([...arr, form]);
    console.log("form", form);
  };

  const deleteLastForm = () => {
    const arrayForm = Object.entries(form);
    arrayForm.pop();
    setArr([arrayForm]);
  };
  return (
    <div>
      <Header />
      <ul className="slider">
        <li>slider</li>
      </ul>
      <Wrapper>
        {arr.map((item) => (
          <Items
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Wrapper>
      {/* <FormTest
        render={({ ...form }) => {
          setArr((arr) => {
            return [
              ...arr,
              {
                id: Date.now(),
                name: form.name,
                price: form.price,
                image: form.link,
                description: form.des,
              },
            ];
          });
        }}
      /> */}
      {/*form context provider test */}

      <div className="form-test">
        <form onSubmit={addFormCard}>
          <label htmlFor="name">Enter name</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={trackValue}
          />
          <label htmlFor="price">Add the price</label>
          <input
            type="text"
            id="price"
            value={form.price}
            onChange={trackValue}
          />
          <label htmlFor="link">Add link </label>
          <input
            type="text"
            id="link"
            value={form.link}
            onChange={trackValue}
          />
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
          <button onClick={addToForm}>Add form to Card section</button>
          <button onClick={deleteLastForm}>
            Delete the last form to Card section
          </button>
        </form>
      </div>

      {/* end of form context provider test */}
      {/* <Form
        render={(item, link, price, des) => {
          const addedCard = {
            id: Date.now(),
            name: item,
            price: price,
            image: link,
            description: des,
          };

          setArr((arr) => {
            return [...arr, addedCard];
          });
        }}
      /> */}
      {/* <Form
        render={(item, link, price, des) => {
          setArr((arr) => {
            return [
              ...arr,
              {
                id: Date.now(),
                name: item,
                price: price,
                image: link,
                description: des,
              },
            ];
          });
        }}
      /> */}
    </div>
  );
}

export default App;
