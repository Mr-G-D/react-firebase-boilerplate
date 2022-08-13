import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { readData } from "./firebase/main";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await readData();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div className="App">
      {data?.map((ele) => {
        return ele.title;
      })}
    </div>
  );
}

export default App;
