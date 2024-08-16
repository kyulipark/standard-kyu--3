import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Status from "./components/Status";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header title="Counter App" />
      <Content />
      <Counter count={count} setCount={setCount} />
      <Status count={count} />
      <Footer year="2024" />
    </div>
  );
}

export default App;
