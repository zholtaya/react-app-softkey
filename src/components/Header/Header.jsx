import {useLocation} from "react-router-dom";
import { useContext } from "react";
import cart from "../../assets/images/cart.png";

import {ModalContext} from "../../pages/Root.jsx";

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);

    return (
        <div onClick={toggleModal} className="modal-href">
            {" "}
            <a href="#" className="modal_href">
                <img src={cart} alt="" />
            </a>
        </div>
    );
}
function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <header className={isHomePage ? "header" : ""}>
            <div className="container">
                <div className="header_inner">
                   
                    <div className="header_logo">
                        <a href="/">Soft. Key</a>
                    </div>

                    <nav className="header-nav">
                        <a href="/#catalog" className="nav-link">
                            Каталог
                        </a>
                        <a href="/" className="nav-link">
                            Скидки
                        </a>
                        <a href="/user" className="nav-link">
                            Вход
                        </a>
                    </nav>

                    <div className="buttons">
                        <CartButton />
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;