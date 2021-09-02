import React, { useState } from 'react';
import './counter.css';

const Counter = ({ initialValue }: any) => {
  const [num, setNum] = useState<number>(initialValue);

  const hanlderAdd = () => setNum(currentValue => currentValue + 1);
  const handlerLess = () => setNum(currentValue => currentValue - 1);
  const handlerReset = () => setNum(initialValue);

  return <>
    <div>{num}</div>
    <button onClick={hanlderAdd}>add</button>
    <button onClick={handlerReset}>reset</button>
    <button onClick={handlerLess}>less</button>
  </>;
};

export default Counter;
