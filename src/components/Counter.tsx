import { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Contador : ${count}`
  },[count])
  return (
    <div>
      <h1>Exemplo de useEffect</h1>
      <button onClick = {()=> setCount(count + 1)}>Contar</button>
    </div>
  );
}
