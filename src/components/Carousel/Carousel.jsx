import React, { useState, useEffect } from "react";
import useClasses from "../../utils/useClasses";
import { styles } from "./styles";
import { useSwipeable } from "react-swipeable";
import { galleySwitchTime } from "../../constants/galleryTime.js";

export const CarouselItem = ({ children, width }) => {
  const classes = useClasses(styles);
  return (
    <div className={classes.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const classes = useClasses(styles);
  const updateIdx = (newIdx) => {
    if (newIdx < 0) {
      newIdx = React.Children.count(children) - 1;
    } else if (newIdx >= React.Children.count(children)) {
      newIdx = 0;
    }
    setActiveIdx(newIdx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIdx(activeIdx + 1);
      }
    }, galleySwitchTime);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIdx(activeIdx + 1),
    onSwipedRight: () => updateIdx(activeIdx - 1),
  });
  return (
    <div
      {...handlers}
      className={classes.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={classes.inner}
        style={{ transform: `translateX(-${activeIdx * 100}%)` }}
      >
        {React.Children.map(children, (child, __id) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={classes.indicators}>
        {/* buttons are inactive  */}

        {/* <button
          onClick={() => {
            updateIdx(activeIdx - 1);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            updateIdx(activeIdx + 1);
          }}
        >
          next
        </button> */}
      </div>
    </div>
  );
};
