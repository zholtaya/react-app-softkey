import { NavLink, useParams } from "react-router-dom";
import cart from "../../assets/images/cart.png";

import formatMoney from "../../utils/formatMoney.js";

const Product = ({id, url, name, price}) => {
    return (
        <NavLink to={"/products/" + id}>
            <div className="one_item">
                <div className="modal_catalog">
                    <a
                        onClick={() => addToCart(product)}
                        className="modal_href_catalog"
                    >
                        <img src={cart} alt="" />
                    </a>
                </div>
                <img src={url} alt="" />

                <h3>{name}</h3>
                <h4>{formatMoney(price)} ₽</h4>
            </div>
        </NavLink>
    );
}

export default Product;