import { useEffect, useState } from "react";

export function Test() {
  const [a, setA] = useState(0);

  useEffect(() => {
    console.log('mount')
    return () => {
        console.log('unmount')
    }
  }, [a]);

  function b () {
    setA((prev) => {
        if (prev === 5) {
            return 0
        }
        return prev + 1
    }) 
  }

  return (
    <div>
      <p>Test {a}</p>
      <button onClick={b}>click</button>
    </div>
  );
}
