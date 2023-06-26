import { useRef } from 'react';

export default function App() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return <button onClick={handleClick}>Click me!</button>;
}

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);

//   const handleStart = () => {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   };

//   let seconds = 0;
//   if (startTime != null && now != null) {
//     seconds = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {seconds.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>
//       {/* <button onClick={handleStop}>Stop</button> */}
//     </>
//   );
// }
