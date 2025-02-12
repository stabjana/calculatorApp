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
        setIsNum(false);
        if (operation) {
          const result: number = memoryNum + parseFloat(displayNum);
          setMemoryNum(result);
          setDisplayNum(result.toString()); // wenn 3 gedrückt ist dann durch neue zahl ersetzen nach operation
        } else {
          setMemoryNum(+displayNum);
        }
        setOperation(value);
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
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

  return (
    <div className="calculator-container">
      <Input error={hasError} input={displayNum} />
      <Buttons handleOnPress={handleButtonPress} />
    </div>
  );
}
