import {useContext} from "react";
import {CartContext} from "../../pages/Root.jsx";
import formatMoney from "../../utils/formatMoney.js";
import del from "../../assets/images/delete.png";

const CartItem = ({item}) => {
    const {removeCartItemById} = useContext(CartContext);

    return (
        <div className="modal__item">
            <div className="modal__image">
                <img src={item.image} alt="" />
            </div>

            <div className="modal__information">
                <div>
                   
                    <h3 className="modal__name">{item.name}</h3>
                    <p className="modal__price">{formatMoney(item.price)} ₽</p>
                </div>
                <button
                    onClick={() => removeCartItemById(item.id)}
                    className="modal__delete"
                >
                    <img src={del} alt="" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;