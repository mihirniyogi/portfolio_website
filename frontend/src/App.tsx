import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/test")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <p>Hi, {message}</p>
        <p>Hello again</p>
      </div>
    </>
  );
}

export default App;
