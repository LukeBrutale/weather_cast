import React, { useState } from 'react';
import s from './HorizontalScroll.module.css';

function HorizontalScroll({ items }) {
  const [scrollX, setScrollX] = useState(0);

  const scrollLeft = () => {
    setScrollX(scrollX - 150);
  };

  const scrollRight = () => {
    setScrollX(scrollX + 150);
  };

  return (
    <div className={s.horizontal_scroll_container}>
      <button onClick={scrollLeft}>&#129192;</button>
      <div className={s.scrollable_content} style={{ transform: `translateX(${scrollX}px)` }}>
        {items.map((item, index) => (
          <div key={index} className={s.item}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={scrollRight}>&#129195;</button>
    </div>
  );
}

export default HorizontalScroll;
