import React from "react";
import background from '../images/yag.jpg';

function Card() {
  return (
    <a href="" target="_blank" className="card card__link">
      <div className="card__item">
        <img src={background} className="card__image" alt="" />
        <div className="card__icon card__icon_0"></div>
        <div className="card__icon card__icon_1 hidden"></div>
      </div>
      <h3 className="card__title">"Let's cook!"</h3>
      <p className="card__text">Готовьте с нами лучшую еду</p>
    </a>
  );
}

export default Card;