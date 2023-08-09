import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({
  onTouchStart,
  onTouchEnd,
  onClick,
  text,
  className,
  backgroundColor,
}) => {
  
  return (
    <button
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
      className={className}
      style={{ backgroundColor }}
    >
      <span>{text}</span>
    </button>
  );
};
const Display = ({ counter }) => {
  const numbers = counter.toString();

  return (
    <div className="numbers">
      <div>{numbers[1]}</div>
      <span></span>
      <div>{numbers[0]}</div>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [backgroundColors, setBackgroundColors] = useState({
    plus: "",
    minus: "",
    reset: "",
  });
  var color = "";

  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleTap = (buttonName) => {
    switch (buttonName) {
      case "plus":
        color = "#C3E0AC";
        setBackgroundColors({
          ...backgroundColors,
          [buttonName]: color,
        });
        break;
      case "minus":
        color = "#FB8D8D";
        setBackgroundColors({
          ...backgroundColors,
          [buttonName]: color,
        });
        break;

      case "reset":
        color = "#B6E9F9";
        setBackgroundColors({
          ...backgroundColors,
          [buttonName]: color,
        });
        break;
      default:
        break;
    }
  };

  const handleTapEnd = (buttonName) => {
    const color = "#F5F5F5";

    setBackgroundColors({
      ...backgroundColors,
      [buttonName]: color,
    });
  };

  return (
    <div className="counter-container">
      <Display counter={counter} />
      <div className="controls">
        <Button
          onTouchStart={() => handleTap("plus")}
          onTouchEnd={() => handleTapEnd("plus")}
          onClick={increaseByOne}
          text="+"
          className="plus"
          backgroundColor={backgroundColors.plus}
        />
        <Button
          onTouchStart={() => handleTap("minus")}
          onTouchEnd={() => handleTapEnd("minus")}
          onClick={decreaseByOne}
          text="-"
          className="minus"
          backgroundColor={backgroundColors.minus}
        />
        <Button
          onTouchStart={() => handleTap("reset")}
          onTouchEnd={() => handleTapEnd("reset")}
          onClick={handleReset}
          text="Reset"
          className="reset"
          backgroundColor={backgroundColors.reset}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
