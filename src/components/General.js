import React from "react";
import Slider from './Slider';
import Course from './Course';


function General() {
  return (
    <section className="general">
        <div className="general__main " id="generalMain">
          <Slider />
          <Course />            
        </div>

        <div className="general__favorites hidden" id="generalFavorites">
          <h2 className="general__title"><img src="./images/sci.png" className="general__icon" alt="" />Лучшее из этой категории</h2>
          <div className="general__container">
            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"История Искусств"</h3>
              <p className="card__text">После вы захотите ходить в музеи</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Меню в Indesilhh с нуля"</h3>
              <p className="card__text">Фокусы на все случаи жизни</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's заголовок"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>
            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"История Искусств"</h3>
              <p className="card__text">После вы захотите ходить в музеи</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Меню в Indesilhh с нуля"</h3>
              <p className="card__text">Фокусы на все случаи жизни</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's заголовок"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>
            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"История Искусств"</h3>
              <p className="card__text">После вы захотите ходить в музеи</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Меню в Indesilhh с нуля"</h3>
              <p className="card__text">Фокусы на все случаи жизни</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0"></div>
                <div className="card__icon card__icon_1 hidden"></div>
              </div>
              <h3 className="card__title">"Let's заголовок"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>
          </div>
        </div>

        <div className="general__lk hidden" id="generalLk">
          <div className="lk">
            <div className="lk__top">
              <img src="./images/lk2.png" alt="" className="lk__image" />
              <h2 className="lk__title title">Личный кабинет</h2>
            </div>

            <div className="lk__main">
              <div className="lk__info">
                <img src="./images/jul.jpg" className="lk__photo" alt="фото пользователя" />
                <div className="lk__content">
                  <h3 className="lk__name title">Юлия</h3>
                  <p className="lk__email">Julia2000@gmail.com</p>
                </div>
              </div>
              <div className="lk__buttons">
                <button className="lk__password button">Сменить пароль</button>
                <button className="lk__help button">Помощь</button>
              </div>
            </div>
          </div>
          <h2 className="general__title">Избранные курсы</h2>
          <div className="general__container">
            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"История Искусств"</h3>
              <p className="card__text">После вы захотите ходить в музеи</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Меню в Indesilhh с нуля"</h3>
              <p className="card__text">Фокусы на все случаи жизни</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"Let's заголовок"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>
            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"История Искусств"</h3>
              <p className="card__text">После вы захотите ходить в музеи</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Меню в Indesilhh с нуля"</h3>
              <p className="card__text">Фокусы на все случаи жизни</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1"></div>
              </div>
              <h3 className="card__title">"Let's cook!"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>

            <div className="card">
              <div className="card__item">
                <img src="./images/yag.jpg" className="card__image" alt="" />
                <div className="card__icon card__icon_0 hidden"></div>
                <div className="card__icon card__icon_1 "></div>
              </div>
              <h3 className="card__title">"Let's заголовок"</h3>
              <p className="card__text">Готовьте с нами лучшую еду</p>
            </div>
            
          </div>
        </div>
      </section>
  );
}

export default General;
