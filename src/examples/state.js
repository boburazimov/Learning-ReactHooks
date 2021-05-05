import React, {useState} from 'react';

function computeInitialCounter() {
  console.log("Some calculations...")
  return Math.trunc(Math.random() * 20)
}

function App() {

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  });

  function increment() {
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
    setCounter(prevState => prevState + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }


  return (
      <div>
        <h3 className="m-auto">Счетчик: {counter}</h3>
        <div className="btn btn-group">
          <button onClick={increment} className="btn btn-success">Добавить</button>
          <button onClick={decrement} className="btn btn-info">Убрать</button>
        </div>
      </div>
  );
}

export default App;
