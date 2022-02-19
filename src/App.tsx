import { useEffect, useState } from "react";
import findIndex from "lodash-es/findIndex";
import { api } from "./api";
import { a } from "./utils";

a();

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    api();
    console.log(findIndex(["안", "녕"], (item) => item === "안"));
  }, []);

  return (
    <div>
      (⋈•̀ ᴗ•́⋈)
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
