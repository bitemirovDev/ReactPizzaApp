import './scss/app.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

export default function App() {
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
            <PizzaBlock
              title="Креветки со сладким чили"
              price="395"
              img="https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif"
            />
            <PizzaBlock
              title="Сырная"
              price="250"
              img="https://media.dodostatic.net/image/r:292x292/11EE7D5F837255B58B25A62C60FFDB38.avif"
            />
            <PizzaBlock
              title="Кебаб"
              price="360"
              img="https://media.dodostatic.net/image/r:584x584/11EF01FEE6DD7261A9C36187149758D0.avif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
