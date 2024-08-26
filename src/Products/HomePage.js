import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./viewproducts.css";
import Navbar from "../Login/Navbar";
import Slider from "../Slider/Slider";

export default function HomePage() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/getall/hotels")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />

      <Slider />

      <h2 style={{fontFamily:"impact"}}>Top restaurant chains</h2>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          {product.map((item, index) => (
            <div className="col-md-3 mt-4">
              <div className="card">
              <div className="card-img-actions">
                      <img
                        src={`/images/${item.hotelName
                          .toLowerCase()
                          .replace(/\s/g, "")}.jpg`}
                        style={{ width: "400px", height: "300px",borderRadius:"20px" }}
                        alt=""
                      />
                    </div>
                <div className="card-body">
                  <div className="mb-2">
                    <Link to={`/productsbyhotel/${item.hotelId}`}>
                      <h4 style={{ fontFamily:"Arial",color:"black",fontSize:"1vw"}}>{item.hotelName}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
