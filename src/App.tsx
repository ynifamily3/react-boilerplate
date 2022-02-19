import { useEffect, useState } from "react";
import findIndex from "lodash-es/findIndex";
import { api } from "./api";
import { b } from "./utils";

// b(122221);

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   api();
  //   console.log(findIndex(["안", "녕"], (item) => item === "안"));
  // }, []);

  return (
    <div>
      (⋈•̀ ᴗ•́⋈)
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>바로클릭!</button>
    </div>
  );
}

export default App;
