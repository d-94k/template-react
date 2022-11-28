import './App.css';
import React, { useState } from 'react';
import Header from './Layout/Header';
import Items from './Components/UI/Items';
import { DATA } from './Database';
import Wrapper from './Components/UI/Wrapper';


function App () {
    const [arr, setArr] = useState (DATA);

      return (
          <div>
            <Header />
            <ul className="slider">
                <li>slider</li>
            </ul>
            <Wrapper>
                {arr.map(item => <Items key={item.id} name={item.name} price={item.price} image={item.image} />)}
            </Wrapper>
          </div>
          
      )
    }



export default App;