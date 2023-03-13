import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import {createContext, useState} from "react";
import Modal from "../components/Modal/Modal.jsx";
import useCart from "../hooks/useCart.js";

export const ModalContext = createContext(null);
export const CartContext = createContext([]);

const Root = () => {
    const cart = useCart([]);

    const [modal, setModal] = useState(false);
    const toggleModal = setModal.bind(this, !modal);

    return (
        <CartContext.Provider value={cart}>
            <ModalContext.Provider value={{modal, toggleModal}}>
                <Modal />
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
            </ModalContext.Provider>
        </CartContext.Provider>
    )
}

export default Root;