import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

const SlideShow = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerStyles = {
        width: "80%",
        height: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        paddingTop: "30px",
        position: "relative"
    }

    const elementStyles = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slides[currentIndex]})`,
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "0.4s"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div style={containerStyles}>
            <div> <AiOutlineArrowLeft onClick={goToPrevious}
                size={35}
                color="#fff"
                style={{ position: "absolute", cursor: "pointer", left: "10px", transform: "translate(0, -50%)", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "50%" }} />
            </div>
            <div style={elementStyles}></div>
            <div> <AiOutlineArrowRight onClick={goToNext}
                size={35}
                color="#fff"
                style={{ position: "absolute", cursor: "pointer", right: "10px", transform: "translate(0, -50%)", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "50%" }} />
            </div>
        </div>
    )
}

export default SlideShow
