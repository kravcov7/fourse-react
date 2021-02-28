import React from "react";

function Category() {
  return (
    <section className="category">
    <h2 className="category__title title">Категории</h2>
    <nav className="nav">
      <ul className="category__list">
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/baby.png" /> Для детей и подростков</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/beauty.png" /> Красота</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/art.png" /> Искусство</a>
          <ul className="category__sublist">
            <li className="category__text"><a className="category__link" href="">Искусство11</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство22</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство33</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство44</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство55</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство66</a></li>
            <li className="category__text"><a className="category__link" href="">Искусство77</a></li>
          </ul>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/science.png" /> Наука</a>
          <ul className="category__sublist">
            <li className="category__text"><a className="category__link" href="">Архитектура</a></li>
            <li className="category__text"><a className="category__link" href="">Биология</a></li>
            <li className="category__text"><a className="category__link" href="">Бухгалтерия</a></li>
            <li className="category__text"><a className="category__link" href="">Культорология</a></li>
            <li className="category__text"><a className="category__link" href="">Математика</a></li>
            <li className="category__text"><a className="category__link" href="">Медицина</a></li>
            <li className="category__text"><a className="category__link" href="">Педагогика</a></li>
          </ul>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/program.png" /> Программирование</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/sev-dev.png" /> Саморазвитие</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/sport.png" /> Спорт</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" src="./images/hobbies.png" /> Хобби</a>
          <ul className="category__sublist">
            <li className="category__text"><a className="category__link" href="">Кройка и шитье</a></li>
            <li className="category__text"><a className="category__link" href="">Флористика</a></li>
            <li className="category__text"><a className="category__link" href="">Вязание</a></li>
            <li className="category__text"><a className="category__link" href="">Кулинария</a></li>
          </ul>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" className="category__image" src="./images/lang.png" /> Языки</a>
        </li>
        <li className="category__text">
          <a className="category__link" href=""><img className="category__image" className="category__image" src="./images/18+.png" /> 18+</a>
        </li>
      </ul>
    </nav>
  </section>
  );
}

export default Category;