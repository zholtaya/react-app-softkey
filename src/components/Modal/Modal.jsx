import {useContext, useRef} from "react";
import {CartContext, ModalContext} from "../../pages/Root.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import cartTotal from "../../utils/cartTotal.js";
import formatMoney from "../../utils/formatMoney.js";

function Modal() {
    const {modal, toggleModal} = useContext(ModalContext);

    const cart = useContext(CartContext);

    const overlayRef = useRef();

    const total = cartTotal(cart.cartItems);

    const close = (e) => {
        if (e.target === overlayRef.current) {
            toggleModal();
        }
    }
    return (
        <div className={`overlay ${modal ? "active" : ""}`} ref={overlayRef} onClick={(e) => close(e)}>
            <div className="modal">
                <div className="modal-top">
                    <h2 className="title">Корзина</h2>

                    <div className="modal-list">
                        {
                            cart.cartItems.map((item) => {
                                return(
                                    <CartItem key={item.id} item={item}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="modal-bottom">
                    <p className="total_price">Итого: <span>{formatMoney(total)} ₽</span></p>
                    <button className="button_order">Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;