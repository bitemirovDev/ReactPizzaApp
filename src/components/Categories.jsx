import { useState } from 'react';
import { categories } from '../utils';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((categ, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
            key={index}>
            {categ}
          </li>
        ))}
      </ul>
    </div>
  );
}
