import { Home, About } from "./routes/imports";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
