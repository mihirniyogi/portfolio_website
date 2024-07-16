import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Navbar from "./components/Navbar";

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
    <div className="container">
      <Navbar />
      <div>
        <p>Hi, {message}</p>
        <p>Hello again</p>
      </div>
    </div>
  );
}

export default App;
