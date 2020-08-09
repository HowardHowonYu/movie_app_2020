import React from "react";
import PropTypes from "prop-types";

// 파일을 만들어서 컴포넌트를 가져올수도 있지만
// 안에서 함수로 선언해서 가져오는 방법도 있고, 이는 재사용 가능하다
// jsx라는 방법 => HTML +  javascript

// {fav}랑 props.fav 랑은 같은거임

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1> I like {name}!!! </h1>{" "}
      <h4>
        {" "}
        {rating}
        /5
      </h4>
      <img src={picture} alt={name} />{" "}
    </div>
  );
}

const foodILike = [
  {
    id: 0,
    name: "Kimchi",
    image:
      "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
  },
  {
    id: 1,
    name: "bulgogi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
    rating: 4.1,
  },
  {
    id: 2,
    name: "kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 3.4,
  },
  {
    id: 3,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 5.2,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1> Hello </h1>{" "}
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}{" "}
    </div>
  );
}

export default App;
