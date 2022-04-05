import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <h1>hi</h1>} />
      <Route path="/login" />
    </Routes>
  );
}

export default App;
