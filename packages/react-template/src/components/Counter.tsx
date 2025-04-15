import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>카운터 예제</h2>
      <p>
        현재 카운트: <span data-testid="counter-value">{count}</span>
      </p>
      <button onClick={incrementCount}>카운트 증가</button>
    </div>
  );
};

export default Counter;
