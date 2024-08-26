import React from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-12">
          <h2>What's on your mind?</h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "biryani" }}
                        >
                          <img
                            src="/images/Biryani.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "pizza" }}
                        >
                          <img
                            src="/images/Pizzas.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "rolls" }}
                        >
                          <img
                            src="/images/Rolls.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "pureveg" }}
                        >
                          <img
                            src="/images/PureVeg.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "dessert" }}
                        >
                          <img
                            src="/images/Desserts.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "chinese" }}
                        >
                          <img
                            src="/images/Chinese.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "paratha" }}
                        >
                          <img
                            src="/images/Paratha.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <NavLink
                          to="/viewproductsbycategory"
                          state={{ from: "cake" }}
                        >
                          <img
                            src="/images/cake.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                            alt=""
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
