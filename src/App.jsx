import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/MatressPage/Home/homePage";







function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
         
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
