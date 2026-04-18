import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* basename={process.env.PUBLIC_URL} -- uncomment this when deploying to GitHub Pages with a homepage set in package.json */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
