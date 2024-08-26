import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../Login/Navbar";

export default function ViewProductsByCategory() {
  let location = useLocation();
  console.log(location.state.from);

  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8082/productsbycategory/${location.state.from}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
      capitalize();
  }, []);

    function capitalize() {
      return location.state.from.charAt(0).toUpperCase() + location.state.from.slice(1);
    }

  const caps = location.state.from.split(" ").map(capitalize).join(" ");

  return (
    <div>
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center mt-50 mb-50">
          <div className="row">
            <h1 style={{ color: "#cc3300", fontFamily: "fantasy" }}>
              {caps}
            </h1>

            <h3 style={{ fontFamily: "impact" }}>
              {product.length} products to explore
            </h3>
            <hr></hr>

            {product.map((item, index) => (
              <div className="col-md-3 mt-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={`/images/${item.item
                          .toLowerCase()
                          .replace(/\s/g, "")}.jpg`}
                        style={{ width: "400px", height: "200px" }}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h3 className="font-weight-semibold mb-2">{item.item}</h3>

                      <h4>{item.hotel.hotelName}</h4>

                      <h4 className="mb-0 font-weight-semibold">
                        ₹{item.price}
                      </h4>
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
    </div>
  );
}
