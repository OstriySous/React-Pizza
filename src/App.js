import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss'

function App() {
    let [items, setItems] = React.useState([])
    fetch('https://62d42519cd960e45d45409a2.mockapi.io/')
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        setItems(json)
    })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
          <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
                <div className="content_itmes">
                {items.map((object) => (
                    <PizzaBlock
                        key={object.id}
                        {... object}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
