import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const FormContext = React.createContext();
const FormContextProvider = ({ children }) => {
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
  const addFormCard = (e) => {
    e.preventDefault();
    console.log(form);
    //props.render({ ...form });
  };
  return (
    <FormContext.Provider value={[form, trackValue, addFormCard]}>
      {children}
    </FormContext.Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>
);
