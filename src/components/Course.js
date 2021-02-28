import React from "react";
import Card from './Card';

function Course() {
  return (
    <>
      <h2 className="general__title">Лучшие курсы этой недели</h2>
      <div className="general__container">
        <template id="card-template">
          <a href="" target="_blank" className="card card__link">
            <div className="card__item">
              <img src="./images/yag.jpg" className="card__image" alt="" />
              <div className="card__icon card__icon_0" id="icon-hover"></div>
              <div className="card__icon card__icon_1 hidden" id="icon-mark"></div>
            </div>
            <h3 className="card__title">"Let's cook!"</h3>
            <p className="card__text">Готовьте с нами лучшую еду</p>
          </a>
        </template>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />        
        
      </div>
    </>
  );
}

export default Course;
