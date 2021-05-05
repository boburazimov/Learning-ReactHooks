import React, {useEffect, useState} from 'react';


function App() {

  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
        .then(response => response.json())
        .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler)
  }, [])

  return (
      <div>
        <h1>Ресурс: {type}</h1>
        <button onClick={() => setType("users")} className="btn btn-info">Users</button>
        <button onClick={() => setType("posts")} className="btn btn-success">Posts</button>
        <button onClick={() => setType("todos")} className="btn btn-danger">Todos</button>

        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
      </div>
  );
}

export default App;
