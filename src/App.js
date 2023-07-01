import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add/>} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
