import "./App.css";
import React, { useState } from "react";
import Header from "./Layout/Header";
import Items from "./Components/UI/Items";
import { DATA } from "./Database";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/UI/Form";

function App() {
  const [arr, setArr] = useState(DATA);

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
      <Form render={(item, link, price, des) => {setArr ((arr) => { return [...arr, {id: Date.now(), name: item, price: price, image: link, description: des}]})}} />
    </div>
  );
}

export default App;
