import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import ViewOrders from "./Component/ViewOrders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/vieworders" element={<ViewOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
