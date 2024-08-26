import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login1 from "./Login/Login1";
import ViewProducts from "./Products/ViewProducts";
import Index from "./Login/Index";
import BuynowProduct from "./Products/BuynowProduct";
import Orders from "./Order/Orders";
import HomePage from "./Products/HomePage";
import ProductsByHotel from "./Products/ProductsByHotel";
import Slider from "./Slider/Slider";
import ViewProductsByCategory from "./Products/ViewProductsByCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login1 />} />
          <Route exact path="/viewproducts" element={<ViewProducts/>}/>
          <Route exact path="/orders" element={<Orders/>}/>
          <Route exact path="/buynowproduct/:id" element={<BuynowProduct/>}/>
          <Route exact path="/productsbyhotel/:id" element={<ProductsByHotel/>}/>
          <Route exact path="/homepage" element={<HomePage/>}/>
          <Route exact path="/viewproductsbycategory" element={<ViewProductsByCategory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
