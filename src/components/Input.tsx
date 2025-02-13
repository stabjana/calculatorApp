import "../index.css";

interface InputProps {
  input: string;
  error: boolean;
}

export default function Input({ input, error }: InputProps) {
  // display
  //parseFloat(input); // toDo: limit to 14 numbers on the display
  return (
    <div className="display-container">
      {error ? <h1>Error</h1> : <h1>{input ? input : "0"}</h1>}
    </div>
  );
}
