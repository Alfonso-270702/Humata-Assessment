import React, { useState, useEffect } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

import { math, toLocaleString, removeSpaces } from "./helper";
const btnValues = [
  ["+", "-", "/"],
  ["^", "SWAP", "*"],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["ON/OFF", 0, "CLEAR"],
];

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    res: 0,
    num1: 0,
    num2: 0,
  });

  useEffect(() => {
    if (calc.num1 > 0 && calc.num2 > 0) {
      equalsClickHandler();
    }
  }, [calc.num1, calc.num2]);

  const [calcOn, setCalcOn] = useState(false);
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (removeSpaces(calc.num1).length < 16) {
      if (calc.num1 === 0) {
        setCalc({
          ...calc,
          num1:
            calc.num1 === 0 && value === "0"
              ? "0"
              : removeSpaces(calc.num1) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num1 + value)))
              : toLocaleString(calc.num1 + value),
        });
      } else {
        setCalc({
          ...calc,
          num2:
            calc.num2 === 0 && value === "0"
              ? "0"
              : removeSpaces(calc.num2) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num2 + value)))
              : toLocaleString(calc.num2 + value),
        });
      }
    }
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num1 && calc.num2) {
      setCalc({
        ...calc,
        res:
          calc.num1 === "0" && calc.num2 === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.num1)),
                  Number(removeSpaces(calc.num2)),
                  calc.sign
                )
              ),
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      res: 0,
      num1: 0,
      num2: 0,
    });
  };

  const onOff = () => {
    setCalcOn(!calcOn);
  };

  const swap = () => {
    let value1 = calc.num1;
    let value2 = calc.num2;

    setCalc({
      ...calc,
      num1: value2,
      num2: value1,
      res: math(
        Number(removeSpaces(calc.num1)),
        Number(removeSpaces(calc.num2)),
        calc.sign
      ),
    });
  };

  return (
    <Wrapper>
      <Screen value={calc} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              disabled={calcOn}
              className={
                btn === "ON/OFF"
                  ? "on_off"
                  : btn === "CLEAR"
                  ? "clear"
                  : btn === "+" ||
                    btn === "-" ||
                    btn === "/" ||
                    btn === "^" ||
                    btn === "SWAP" ||
                    btn === "*"
                  ? "aritmatic"
                  : "number"
              }
              value={btn}
              onClick={
                btn === "CLEAR"
                  ? resetClickHandler
                  : btn === "/" ||
                    btn === "*" ||
                    btn === "-" ||
                    btn === "+" ||
                    btn === "^"
                  ? signClickHandler
                  : btn === "ON/OFF"
                  ? onOff
                  : btn === "SWAP"
                  ? swap
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
