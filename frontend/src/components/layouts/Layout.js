import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Menu from '../componentsOfMenu/Menu';
import MenuItem from '../componentsOfMenu/MenuItem';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.brand = ''; 

        window.onscroll = function() {scrollFunction();};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }
     
    }
    
    isActive(href) {
        return window.location.pathname === href;
    };

    topFunction ()  {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    };

    render () {
        return (
            <>
                <header>
                <div className="container-fluid header">
                    <div className="container-fluid header-logo"><a href="/" target="blank"></a></div>
                </div>
                <Menu brand={this.brand}>
                    <MenuItem href="/preschool-general-education" active={ this.isActive("/preschool-general-education") }>Дошкольное общее образование</MenuItem>
                    <MenuItem href="/primary-general-education" active={ this.isActive("/primary-general-education") }>Начальное общее образование 1, 2, 3, 4 классы</MenuItem>
                    <MenuItem href="/basic-general-education" active={ this.isActive("/basic-general-education") }>Основное общее образование 5, 6, 7, 8, 9 классы</MenuItem>
                    <MenuItem href="/secondary-general-education" active={ this.isActive("/secondary-general-education") }>Среднее общее образование 10, 11 классы</MenuItem>
                    <MenuItem href="/higher-education" active={ this.isActive("/higher-education") }>Высшее образование</MenuItem>     
                </Menu>
                </header>

                <main>
                    <div className="rows">
                        <div className="col-12">
                            { this.props.children }
                        </div>
                    </div>
                </main>

                <footer className="b-footer">
                   <div className="container-fluid footer">
                    <div className="container-fluid">
                        <div className="row footer-top">
                            <div className="col-md-8 footer-title"><h2>Горячая линия Издательства "Просвещение"</h2></div>
                            <div className="col-md-2 my-auto footer-google-play-button">
                                <a href=""><img src="/frontend/img/googleplay_icon.png" alt=""/></a>
                            </div>
                            <div className="col-md-2 my-auto footer-app-store-button">
                                <a href=""><img src="/frontend/img/appstore_icon.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="footer-bot">
                            <div className="footer-contact-info">
                                У вас возникли вопросы? <br/>
                                Пишите, методисты издательства "Просвещение" обязательно ответят вам
                                <div className="contact-info-mail"><a href="mailto:digital@prosv.ru">vopros@prosv.ru</a></div>
                                <div className="contact-info-telephone">+7 (495) 789-30-20</div>
                            </div>
                            <div className="footer-company-info">&copy; 2020 Группа компаний «Просвещение».
                                            <div className="footer-sitemap"><a href="#">Карта сайта</a></div>
                        </div>
                    </div>
                </div>

	            <button onClick={this.topFunction} id="myBtn" title="Нажмите для перехода наверх"></button>

                </div>
                </footer>
            </>
        )
    }
}

export default Layout
