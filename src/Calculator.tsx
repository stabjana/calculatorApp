import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./index.css";

export default function Calculator() {
  const [memoryNum, setMemoryNum] = useState<number>(0);
  const [displayNum, setDisplayNum] = useState<string>("");
  const [isNum, setIsNum] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [operation, setOperation] = useState<string | null>(null);

  function handleButtonPress(value: string): void {
    // depending which button is pressed
    switch (value) {
      case "+":
      calculateResult(value);
        break;
      case "-":
        calculateResult(value);
        break;
      case "*":
        calculateResult(value);
        break;
      case "/":
        calculateResult(value);
        break;
      case "=":
        calculateResult(value);
        setIsNum(true); // sets it all back to initial state
        setOperation(null);
        break;
      case "C":
        setMemoryNum(0);
        setDisplayNum("");
        setIsNum(true);
        setOperation(null);
        break;
        case "+/-":
          if(displayNum){
            setDisplayNum((parseFloat(displayNum)*(-1)).toString());
          }
         break;
      default:
        if (!isNum) {
          setDisplayNum(value);
          setIsNum(true);
        } else if (isNum){
          if(displayNum.includes('.') && value === '.'){
            break;
          }
          setDisplayNum(displayNum + value);
        }
    }
  }

  const calculateResult = (value: string)=>{
    if(!isNum){
      // replace with new character
      setOperation(value);
      return;
    }
      setIsNum(false);
      if (operation) {
       const result = eval(memoryNum.toString() + operation + displayNum);
        setMemoryNum(result);
        setDisplayNum(result.toString());
      } else {
        setMemoryNum(+displayNum);
      }
      setOperation(value);
  }

  return (
    <div className="calculator-container">
      <Display error={hasError} display={displayNum} />
      <Buttons handleOnPress={handleButtonPress} />
    </div>
  );
}
