import './scss/app.css';
import { pizzas } from './pizzas-db';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://66525f57813d78e6d6d558a6.mockapi.io/api/rc/pizzas')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock {...pizza} key={pizza.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
