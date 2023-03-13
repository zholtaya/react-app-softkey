// import logoIcon from "../../assets/logo2.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_logo_text">
                        <div className="footer_logo">
                            <a href="#">Soft. Key</a>
                        </div>
                        <h4>
                            Все права права защищены |
                            <span>Публичная оферта</span>
                        </h4>
                    </div>
                    <div className="footer_navigation">
                        <nav className="footer_nav">
                            <a href="#" className="head_nav_footer">
                                Категории
                            </a>
                            <a href="#" className="link_footer">
                                Шутеры
                            </a>
                            <a href="#" className="link_footer">
                                Симуляторы
                            </a>
                            <a href="#" className="link_footer">
                                RPG
                            </a>
                            <a href="#" className="link_footer">
                                Приключения
                            </a>
                        </nav>
                        <nav className="footer_nav">
                            <a href="#" className="head_nav_footer">
                                Виды
                            </a>
                            <a href="#" className="link_footer">
                                Подарочные карты
                            </a>
                            <a href="#" className="link_footer">
                                Аккаунты
                            </a>
                            <a href="#" className="link_footer">
                                Ключи
                            </a>
                            <a href="#" className="link_footer">
                                Игровые предметы
                            </a>
                        </nav>
                        <nav className="footer_nav">
                            <a href="#" className="head_nav_footer">
                                Меню
                            </a>
                            <a href="#" className="link_footer">
                                Каталог
                            </a>
                            <a href="#" className="link_footer">
                                Скидки
                            </a>
                            <a href="#" className="link_footer">
                                Корзина
                            </a>
                            <a href="#" className="link_footer">
                                Рассылка
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;