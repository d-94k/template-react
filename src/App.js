import "./App.css";
import React, { useState } from "react";
import Header from "./Layout/Header";
import Items from "./Components/UI/Items";
import { DATA } from "./Database";
import Wrapper from "./Components/UI/Wrapper";
import AddItem from "./Pages/AddItem";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./Components/UI/ItemDetails";

function App(props) {
  const [data, setData] = useState(DATA);
  const newMeth = (newData) => {
    setData((listItem) => [...listItem, newData]);
    console.log("this is :", newData);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="additem" element={<AddItem onSaveItem={newMeth} />} />
        <Route
          path="/"
          element={
            <div>
              <ul className="slider">
                <li>slider</li>
              </ul>{" "}
              <Wrapper>
                {data.map((item) => (
                  <Items
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    descsription={item.description}
                  />
                ))}
              </Wrapper>
            </div>
          }
        />

        <Route path="item/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
