import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login1 from "./Login/Login1";
import ViewProducts from "./Products/ViewProducts";
import Index from "./Login/Index";
import BuynowProduct from "./Products/BuynowProduct";
import Orders from "./Order/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login1 />} />
          <Route exact path="/viewproducts" element={<ViewProducts/>}/>
          <Route exact path="/orders" element={<Orders/>}/>
          <Route exact path="/buynowproduct/:id" element={<BuynowProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
