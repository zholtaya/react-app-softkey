import {NavLink} from "react-router-dom";

const SlideItem = ({item}) => {
    return (
        <div className="slides">
            <div className="slide">
                <img src={item.url} alt="" />
            </div>

            <div className="container">
                <div className="main__titles">
                    <div className="main__title">
                        <h1>{item.name}</h1>
                        <h2>{ item.subname}</h2>

                        <NavLink className="main__button" to={item.button.path}>
                            {item.button.text}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SlideItem;