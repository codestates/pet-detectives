import React, { useState } from 'react';

export const ScrollButton = () => {
  const [scroll, setScroll] = useState(0);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScroll(0);
  };

  return (
    <div className="scroll_button_container">
      <div className="scroll_button_box" onClick={handleScrollUp}>
        <img 
          className="scroll_button"
          src={"image/downArrow.png"} alt="TOP"></img>
      </div>
    </div>
  );

}