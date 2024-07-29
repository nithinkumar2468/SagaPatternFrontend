import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewOrders() {
  const vendor = window.localStorage.getItem("isLoggedIn");

  const [useraddress, setUserAddress] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    fetch(`http://localhost:8082/getall/${vendor}`)
      .then((res) => res.json())
      .then((data) => setUserAddress(data));
  };

  const updateOrder = (orderId, newStatus) => {
    axios
      .put(`http://localhost:8082/update/${orderId}`, {
        restaurantOrderStatus: newStatus,
      })
      .then((response) => {
        fetchOrders();
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };
  return (
    <div>
      <div className="py-20 container">
        <div className=" py-10 row">
          <div className="col offset-md-20 border rounded p-4 mt-2 shadow">
            <div>
              <div>
                <h2>Orders</h2>
                <hr></hr>
              </div>
            </div>

            <table className="table border shadow table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    OrderId
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    UserId
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Product
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ backgroundColor: "#66b3ff" }}>
                    Price
                  </th>
                  <th
                    scope="col"
                    style={{ backgroundColor: "#66b3ff", textAlign: "center" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {useraddress.length > 0 ? (
                  useraddress.map((item, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {item.orderId}
                      </th>
                      <td>{item.userId}</td>
                      <td>{item.item}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>

                      {item.restaurantOrderStatus === "Pending" ? (
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="submit"
                            className="btn btn-outline-primary mx-2"
                            onClick={() => {
                              updateOrder(item.orderId, "success");
                            }}
                          >
                            Accept
                          </button>
                          <button
                            type="submit"
                            className="btn btn-outline-danger mx-2"
                            onClick={() => {
                              updateOrder(item.orderId, "failure");
                            }}
                          >
                            Decline
                          </button>
                        </td>
                      ) : (
                        <td style={{ textAlign: "center" }}>
                          {item.restaurantOrderStatus}
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <h2 style={{ color: "#cc3300", textAlign: "center" }}>
                    No Orders to display..!
                  </h2>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
