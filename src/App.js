import react, { useState } from "react";
import "./App.css";

let i = 1;
function App() {
  const [Number1, setNumber1] = useState(0);
  const [Number2, setNumber2] = useState(0);
  const [PlusSub, setPlusSub] = useState("+");
  const [Result, setResult] = useState(0);
  const [Save, setSave] = useState([0]);

  const onChangeNumHandler1 = function (e) {
    setNumber1(e.currentTarget.value);
  };

  const onChangeNumHandler2 = function (e) {
    setNumber2(e.currentTarget.value);
  };
  const onSelectHandler = function (e) {
    setPlusSub(e.currentTarget.value);
  };

  const onCalHandler = function () {
    if (PlusSub === "+") {
      let sum = Number(Number1) + Number(Number2);
      setResult(sum);
      setNumber1(sum);
      setSave([...Save, sum]);
    } else {
      let sub = Number(Number1) - Number(Number2);
      setResult(sub);
      setNumber1(sub);
      setSave([...Save, sub]);
    }
  };

  const onPreHandler = function () {
    console.log(Save.length);
    console.log(Save);
    setResult(Save[Save.length - ++i]);
  };

  const onNextHandler = function () {
    setResult(Save[Save.length - --i]);
  };

  return (
    <div className="App">
      <input
        type="number"
        id="num1"
        value={Number1}
        onChange={onChangeNumHandler1}
      />
      <select onChange={onSelectHandler}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <div>{PlusSub}</div>
      <input
        type="number"
        id="num2"
        value={Number2}
        onChange={onChangeNumHandler2}
      />
      <span>{Result}</span>
      <br />
      <br />
      <button onClick={onCalHandler}>계산</button>
      <br />
      <br />
      {Save.length >= 1 ? (
        <button id="pre" onClick={onPreHandler}>
          이전
        </button>
      ) : (
        <button id="pre" disabled="disabled">
          이전
        </button>
      )}

      {/* <button id="next" disabled="disabled">
        다음
      </button> */}
      <button id="next" onClick={onNextHandler}>
        다음
      </button>
    </div>
  );
}

export default App;
