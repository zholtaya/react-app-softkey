import React from "react";
import arrow_slider from "../../assets/images/arrow.png";
import arrow_slider1 from "../../assets/images/arrow1.png";
import item1 from "../../assets/images/catalog/item1.jpg";
import cart from "../../assets/images/cart.png";
import { PRODUCTS } from "../../data/products.jsx";

import { useState } from "react";




const Discount = ({ id, url, name, price }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");
    
    return (
        <div>
            <section className="discount">
                <div className="container">
                    <div className="title_sections_discount">Скидки</div>

                    <div className="content_discount">
                        <div className="button_slider">
                            <img src={arrow_slider} alt="" />
                        </div>

                        <div className="items_list">
                            <div className="one_item">
                                <div className="modal_catalog">
                                    <a href="#" className="modal_href_catalog">
                                        <img src={cart} alt="" />
                                    </a>
                                </div>
                                <img src={item1} alt="" />

                                <h3>Elderand</h3>
                                <div className="discount_price">
                                    <h4>459 ₽</h4>
                                    <h5>999 ₽</h5>
                                </div>
                            </div>
                            <div className="one_item">
                                <div className="modal_catalog">
                                    <a href="#" className="modal_href_catalog">
                                        <img src={cart} alt="" />
                                    </a>
                                </div>
                                <img src={item1} alt="" />

                                <h3>Elderand</h3>
                                <div className="discount_price">
                                    <h4>459 ₽</h4>
                                    <h5>999 ₽</h5>
                                </div>
                            </div>
                            <div className="one_item">
                                <div className="modal_catalog">
                                    <a href="#" className="modal_href_catalog">
                                        <img src={cart} alt="" />
                                    </a>
                                </div>
                                <img src={item1} alt="" />

                                <h3>Elderand</h3>
                                <div className="discount_price">
                                    <h4>459 ₽</h4>
                                    <h5>999 ₽</h5>
                                </div>
                            </div>
                        </div>

                        <div className="button_slider">
                            <img src={arrow_slider1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Discount;
