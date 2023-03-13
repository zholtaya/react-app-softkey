import {PRODUCTS} from "../../data/products.jsx";
import Product from "../Products/Product.jsx";

import {useState} from "react";

function Catalog() {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filterProducts = products.filter((item) => item.name.toLowerCase().includes(query));

    const onChangeQuery = (e) => {
        setQuery(e.target.value.toLowerCase());
    }

    return (
        <section className="section__background-color" id="catalog">
            <div className="container">
                <div className="wrapper">
                    <div className="header_catalog">
                        <div className="title_sections">Каталог</div>
                        <form action="" className="search">
                            <input
                                type="text"
                                placeholder="Введите название"
                                name="name"
                                className="input_search"
                                value={query}
                                onChange={(e) => onChangeQuery(e)}
                            />
                            <button type="submit" className="button_search">
                                Поиск
                            </button>
                        </form>
                    </div>
                  

                    <div className="content_catalog">
                        {filterProducts.length ? (
                            filterProducts.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        id={product.id}
                                        url={product.image}
                                        name={product.name}
                                        price={product.price}
                                    />
                                );
                            })
                        ) : (
                            <h2>По запросу {query} ничего не найдено</h2>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;