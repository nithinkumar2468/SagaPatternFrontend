import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login1 from "./Component/Login1";
import ViewOrders from "./Component/ViewOrders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login1 />} />
          <Route exact path="/vieworders" element={<ViewOrders />} />
          <Route exact path="/" element={<Login1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
