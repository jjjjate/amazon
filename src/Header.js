import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatchEvent] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요!</span>
          <Link to={!user && "/Login"} className="homeLogin">
            <span
              onClick={handleAuthentication}
              className="header_optionLineTwo"
            >
              {user ? "로그아웃" : "로그인"}
            </span>
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>
        <Link to="/Checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionBasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
