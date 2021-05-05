import React, {useEffect, useRef, useState} from 'react';

/* Состояние которые определяются через hook useRef, они сохроняются между рендерами компонента,
 но при этим когда мы меняем непосрественно саму референсию, мы не вызиваем рендер у компонента, то есть,
  если мы хотим что то сохранить между рендерами, то мы используем useRef, при том если мы не хотим это перерисовывать */

function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    // setRenderCount(prevState => prevState + 1)
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focusHandler = () => inputRef.current.focus()

  return (
      <div>
        <h1>Количество рендеров: {renderCount.current}</h1>
        <h1>Прошлое состояние: {prevValue.current}</h1>
        <input ref={inputRef} type="text" onChange={event => setValue(event.target.value)} value={value}/>
        <button className="btn btn-info" onClick={focusHandler}>Фокус на инпут</button>
      </div>
  );
}

export default App;
