import { useState } from "react";

function CounterList() {
  const [counters, setCounters] = useState(Array(96).fill(0));

  // Function to handle incrementing a counter
  const handleIncrement = (index:any) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  // Function to format time based on index
  const formatTime = (index:any) => {
    const hours = Math.floor(index * 15 / 60);
    const minutes = (index * 15) % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1 className="w-[100svw] text-center pt-2 pb-5">Contador de Bicicletas</h1>
      <ul className="grid grid-cols-3 text-center w-[100svw] gap-10">
        {counters.map((count, index) => (
          <li key={index}>
            <h3>{formatTime(index)}</h3>
            <p>Contagem: {count}</p>
            <button onClick={() => handleIncrement(index)}>Acrescentar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CounterList;