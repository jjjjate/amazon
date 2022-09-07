import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatchEvent] = useStateValue();
  const history = useNavigate();
  return (
    <div className="payment">
      <div className="payment_container">
        <Link to="/Checkout" className="checkoutLink">
          <h1>장바구니로 들어가기 ({basket?.length} 개의 상품이 존재합니다)</h1>
        </Link>
        <div className="payment_section">
          <div className="payment_title">
            <h3>배달 받을 장소</h3>
          </div>
          <div className="payment_address">
            <p>{user.email}의 주소</p>
            <p>경기도</p>
            <p> 수원 </p>
          </div>
        </div>
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h3>상품 목록</h3>
        </div>
        <div className="payment_items">
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h3> 결제 </h3>
        </div>
        <div className="payment_details"></div>
      </div>
    </div>
  );
}

export default Payment;
