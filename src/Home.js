import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1"
            title="첫번째 사진입니다"
            price={3000}
            image="./img/2022001.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="두번째 사진입니다"
            price={4000}
            image="./img/2022002.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="세번째 사진입니다"
            price={5000}
            image="./img/2022003.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="네번째 사진입니다"
            price={6000}
            image="./img/2022004.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="5"
            title="다섯번째 사진입니다"
            price={6000}
            image="./img/2022005.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
