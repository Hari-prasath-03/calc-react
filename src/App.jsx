/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function CalcButton(props) {
  return (
    <button className={props.class} onClick={() => props.onClick(props.value)}>
      {props.value}
    </button>
  );
}

function Calculator() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  const handleNumber = (value) => {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  };

  const handleOperator = (value) => {
    const total = doCalculation();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  };

  const handleClear = () => {
    setCalc({ current: "0",
      total: "0", 
      isInitial:true, 
      preOp: "", 
    });
  };

  const doCalculation = () => {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  };

  const renderDisplay = () => {
    return calc.current;
  };

  return (
    <>
      <div className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="7" onClick={handleNumber} />
        <CalcButton value="8" onClick={handleNumber} />
        <CalcButton value="9" onClick={handleNumber} />
        <CalcButton class="operator" value="/" onClick={handleOperator} />

        <CalcButton value="4" onClick={handleNumber} />
        <CalcButton value="5" onClick={handleNumber} />
        <CalcButton value="6" onClick={handleNumber} />
        <CalcButton class="operator" value="*" onClick={handleOperator} />

        <CalcButton value="1" onClick={handleNumber} />
        <CalcButton value="2" onClick={handleNumber} />
        <CalcButton value="3" onClick={handleNumber} />
        <CalcButton class="operator" value="-" onClick={handleOperator} />

        <CalcButton value="C" onClick={handleClear} />
        <CalcButton value="0" onClick={handleNumber} />
        <CalcButton value="=" onClick={handleOperator} />
        <CalcButton class="operator" value="+" onClick={handleOperator} />
      </div>
    </>
  );
}

export default Calculator;
