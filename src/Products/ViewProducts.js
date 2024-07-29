import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./viewproducts.css";
import Navbar from "../Login/Navbar";

export default function ViewProducts() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/getall/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center mt-50 mb-50 py-20">
        <div className="row">
          <h1 style={{ textAlign: "center", color: "#cc3300" }}>Products</h1>
          {product.map((item, index) => (
            <div className="col-md-3 mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                      className="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />
                  </div>
                </div>

                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h3 className="font-weight-semibold mb-2">{item.item}</h3>

                    <h4>{item.hotel.hotelName}</h4>

                    <h4 className="mb-0 font-weight-semibold">₹{item.price}</h4>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/buynowproduct/${item.productId}`}
                    >
                      Buy Now
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
