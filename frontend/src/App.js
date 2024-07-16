import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


//pages and com

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" 
          element={<Home/>} />
        </Routes>
      </div>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
