import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Login/Navbar";

export default function Orders() {

  const userId = window.localStorage.getItem("isLoggedIn");

  const [useraddress, setUserAddress] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/getall/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserAddress(data));
  }, []);

  return (
    <div>
        <Navbar/>
      <div className="py-20 container">
        <div className=" py-10 row">
          <div className="col offset-md-20 border rounded p-4 mt-2 shadow">

            <div>
                <div><h2>Orders</h2>
                <hr></hr>
            </div>
            </div>
            
        <table className="table border shadow table table-hover">
          <thead>
            <tr>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Order Id</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>CustomerId</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>ProductId</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Quantity</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>Amount</th>
              <th scope="col" style={{backgroundColor:"#66b3ff"}}>ORDER Status</th>
            </tr>
          </thead>
          <tbody>
          {useraddress.length > 0 ? (
              useraddress.map((item,index) => (
              <tr>
                <th scope="row" key={index}>
                  {item.orderId}
                </th>
                <td>{item.customerId}</td>
                <td>{item.productId}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.orderStatus}</td>
              </tr>
            ))):(
                <h2 style={{color:"#cc3300",textAlign:"center"}}>No Orders to display..!</h2>
              )}
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  );
}
