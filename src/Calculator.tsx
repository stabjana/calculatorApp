import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import "./index.css";

export default function Calculator() {
  const [memoryNum, setMemoryNum] = useState<number>(0);
  const [displayNum, setDisplayNum] = useState<string>("");
  const [isNum, setIsNum] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [operation, setOperation] = useState<string | null>(null);

  function handleButtonPress(value: string): void {
    // a number // operation // second number in display // calc || error
    switch (value) {
      case "+": // nochmal + verdoppelt zahl
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
        break;
      case ".":
      default:
        if (!isNum) {
          setDisplayNum(value);
          setIsNum(true);
        } else if (isNum){
          setDisplayNum(displayNum + value);
        }
    }
  }

  const calculateResult = (value: string)=>{
    if(!isNum){
      // durch neues Zeichen ersetzen
      setOperation(value);
      return;
    }
      setIsNum(false);
      if (operation) {
        // const result: number = memoryNum + parseFloat(displayNum);
       const result = eval(memoryNum.toString() + value + displayNum);
       console.log(result);
        setMemoryNum(result);
        setDisplayNum(result.toString()); // wenn 3 gedrückt ist dann durch neue zahl ersetzen nach operation
      } else {
        setMemoryNum(+displayNum);
        console.log('hier');
      }
      setOperation(value);
  }

  return (
    <div className="calculator-container">
      <Input error={hasError} input={displayNum} />
      <Buttons handleOnPress={handleButtonPress} />
    </div>
  );
}
