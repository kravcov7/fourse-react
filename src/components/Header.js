import React from "react";
import logo from "../images/logo-white.png";
import loupe from "../images/loupe.png";
import user from "../images/user.png";


function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="логотип" />
      <form className="search">
        <input className="search__input" placeholder="Введите тему курса" required />
        <button className="search__loupe">
          <img src={loupe} alt="лупа" />
        </button>
      </form>
      <ul className="header__user-menu">
        <li className="header__item header__item_name">
          <button className="button header__button">
            Юлия
            <img src={user} />
          </button>
          <ul className="header__button-menu">
            <li className="header__item" id="lkButton">
              <a className="category__link" href="">
                Личный кабинет
              </a>
            </li>
            <li className="header__item link" id="mainButton">
              <a className="category__link" href="">
                Главная
              </a>
            </li>
            <li className="header__item link" id="favoritesButton">
              <a className="category__link" href="">
                Избранное
              </a>
            </li>
            <li className="header__item link">
              <a className="category__link" href="">
                Создать курс
              </a>
            </li>
          </ul>
        </li>
        <li className="header__item header__item_auth  hidden" id="login-button-header">
          <button className="button header__button">Авторизоваться</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
