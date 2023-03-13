import SlideItem from "../SlideItem/SlideItem.jsx";
import arrow_slider from "../../assets/images/arrow.png";
import arrow_slider1 from "../../assets/images/arrow1.png";

import {useState} from "react";
import {SLIDES} from "../../data/slides.jsx";

const Slider = () => {
    const [items, setItems] = useState(SLIDES);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <div className="slider">
            <SlideItem item={items[currentIndex]} />

            <div className="container">
                <div className="arrows">
                    {currentIndex <= 0 || (
                        <button onClick={prev} className="prev_button">
                            <img src={arrow_slider} alt="" />
                        </button>
                    )}

                    {currentIndex >= items.length - 1 || (
                        <button onClick={next} className="next_button">
                            <img src={arrow_slider1} alt="" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Slider;