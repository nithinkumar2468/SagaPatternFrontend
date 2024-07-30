import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Login/Navbar";

const BuynowProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = window.localStorage.getItem("isLoggedIn");

  const [customer, setCustomer] = useState(null);
  const [user, setUser] = useState({
    item: "",
    price: 0,
    hotel: { hotelId: "", hotelName: "", status: "", password: "" },
    productId: "",
  });
  const [num, setNum] = useState(1);

  const [input, setInput] = useState({
    customerId: userId,
    productId: "",
    hotelId: "",
    quantity: 1,
    price: 0,
    paymentMethod: "WALLET",
  });

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8081/get/user/${userId}`)
        .then((res) => res.json())
        .then((data) => setCustomer(data))
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [userId]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8082/get/product/${id}`
        );
        setUser(result.data);
        setInput((prevInput) => ({
          ...prevInput,
          productId: result.data.productId,
          hotelId: result.data.hotel.hotelId,
          price: result.data.price,
        }));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    if (id) {
      loadProduct();
    }
  }, [id]);

  useEffect(() => {
    setInput((prevInput) => ({
      ...prevInput,
      quantity: num,
      price: num * user.price,
    }));
  }, [num, user.price]);

  const incrementCounter = () => {
    setNum((previous) => previous + 1);
  };

  const decrementCounter = () => {
    setNum((previous) => (previous > 1 ? previous - 1 : 1));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (customer && input.price > customer.balance) {
      window.alert("Wallet balance is less than total price.");
    } else {
      await axios.post(`http://localhost:8080/create`, input);
      navigate("/viewproducts");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container py-20">
        <div
          className="card"
          style={{
            margin: "30px",
            padding: "10px",
            backgroundColor: "#f0f2f2",
          }}
        >
          <div
            className="card-body"
            style={{ width: "400px", height: "500px", padding: "10px" }}
          >
            <h3>Order Summary</h3>
            <div className="container">
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <h4>Product</h4>
                  </label>
                </div>
                <div className="col">
                  <h4>{user.item}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="hotel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <h4>Hotel</h4>
                  </label>
                </div>
                <div className="col">
                  <h4>{user.hotel.hotelName}</h4>
                </div>
              </div>
              {customer && customer.balance > 0 && (
                <div className="row">
                  <div className="col">
                    <label
                      htmlFor="wallet"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <h4>Wallet</h4>
                    </label>
                  </div>
                  <div className="col">
                    <h4>{customer.balance}</h4>
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <h4>Quantity</h4>
                  </label>
                </div>
                <div className="col">
                  <div>
                    <h4>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/images/decrement.jpg"
                                alt="down"
                                className="arrow-up"
                                onClick={decrementCounter}
                                style={{ maxWidth: "30px" }}
                              />
                            </td>
                            &nbsp;
                            {num}&nbsp;
                            <td>
                              <img
                                src="/images/cross.png"
                                alt="up"
                                className="arrow-up"
                                onClick={incrementCounter}
                                style={{ maxWidth: "30px" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <h4>Price</h4>
                  </label>
                </div>
                <div className="col">
                  <h4>₹{user.price}.00</h4>
                </div>
              </div>
              <hr />
              <div
                className="row"
                style={{ backgroundColor: "#f0f2f2", height: "50px" }}
              >
                <div className="col">
                  <h3 style={{ color: "#cc3300" }}>Order Total</h3>
                </div>
                <div className="col" style={{ color: "#cc3300" }}>
                  <h2>&nbsp;&nbsp;&nbsp;&nbsp;₹{input.price}.00/-</h2>
                </div>
              </div>
              <hr />
              <br />
              <form onSubmit={onSubmit}>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuynowProduct;
