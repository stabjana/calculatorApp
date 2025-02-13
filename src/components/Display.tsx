import "../index.css";

interface DisplayProps {
  display: string;
  error: boolean;
}

export default function Display({ display, error }: DisplayProps) {

  //parseFloat(display); // toDo: limit to 14 numbers on the display
  return (
    <div className="display-container">
      {error ? <h1>Error</h1> : <h1>{display ? display : "0"}</h1>}
    </div>
  );
}
