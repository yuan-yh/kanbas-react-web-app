import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
    
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
