import {PRODUCTS} from "../data/products.jsx";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./Root.jsx";
import formatMoney from "../utils/formatMoney.js";

const ItemPage = () => {
    const {id} = useParams();
    const product = PRODUCTS.find(p => p.id == id);

    const {addToCart} = useContext(CartContext);

    if (!product) {
        return <h2>Товар не найден</h2>
    }
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="item__body">
                        <div className="item__image_body">
                            <div className="item__image">
                                <img src={product.image} alt=""/>
                            </div>
                        </div>

                        <div className="item__information">
                            <h2 className="item__name">{product.name}</h2>
                            <p className="description">{product.info}</p>

                            <p className="price">{formatMoney(product.price)} ₽</p>

                            <button onClick={() => addToCart(product)} className="button_add">В корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemPage;