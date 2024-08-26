import React, { useState, useEffect } from "react";
import Navbar from "../Login/Navbar";

export default function Orders() {
  const userId = window.localStorage.getItem("isLoggedIn");

  const [userOrders, setUserOrders] = useState([]);
  const [productData, setProductData] = useState({});
  const [hotelData, setHotelData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await fetch(
          `http://localhost:8080/getall/${userId}`
        );
        const ordersData = await ordersResponse.json();
        setUserOrders(ordersData);

        const productIds = [
          ...new Set(ordersData.map((order) => order.productId)),
        ];

        const productPromises = productIds.map((id) =>
          fetch(`http://localhost:8082/product/${id}`).then((res) =>
            res.json()
          )
        );
        const products = await Promise.all(productPromises);

        const productMap = {};
        const hotelMap = {};

        products.forEach((product) => {
          productMap[product.productId] = product;
          hotelMap[product.hotel.hotelId] = product.hotel;
        });

        setProductData(productMap);
        setHotelData(hotelMap);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <Navbar />
      <div className="py-20 container">
        <div className="py-10 row">
          <div className="col offset-md-20 border rounded p-4 mt-2 shadow">
            <div>
              <div>
                <h2>Orders</h2>
                <hr />
              </div>
            </div>

            <table className="table border shadow table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Order Id
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Restaurant
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Product
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Amount
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    DateTime
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Order Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {userOrders.length > 0 ? (
                  userOrders.map((item) => {
                    const product = productData[item.productId];
                    const hotel = hotelData[product?.hotel?.hotelId];
                    return (
                      <tr key={item.orderId}>
                        <th scope="row">{item.orderId}</th>
                        <td>{hotel ? hotel.hotelName : "Loading..."}</td>
                        <td>{product ? product.item : "Loading..."}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.createdTimeStamp}</td>
                        <td>{item.orderStatus}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">
                      <h2 style={{ color: "#cc3300", textAlign: "center" }}>
                        No Orders to display..!
                      </h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
