import React, {useEffect, useRef, useState} from 'react';
import './CarouselBoxTShirt.css'


const CarouselBoxTShirt = ({element}) => {

    const carouselRef = useRef(null);
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currRef = useRef()
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % element.length);
    };

    useEffect(() => {
        const element = carouselRef.current;
        const height = element.clientHeight;
        arrowRef.current.style = `height: ${height}px`
        arrowRef2.current.style = `height: ${height}px`
    }, [currentIndex]);



    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? element.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        carousel.addEventListener('keydown', handleKeyDown);

        return () => {
            carousel.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="carouselTS" ref={carouselRef} tabIndex="0">
            <div ref={arrowRef} id="leftArrowTSContainer" onClick={handlePrev}></div>
            <img id="leftArrowTS" src="https://i.pinimg.com/originals/4c/03/b3/4c03b3f0f339580c27e9efab2dc2a744.png" alt=""  onClick={handlePrev}/>
            <img ref={currRef} id="currentImgTS" src={element[currentIndex]} alt={`Image ${currentIndex}`} />
            <div ref={arrowRef2} id="rightArrowTSContainer" onClick={handleNext}></div>
            <img id="rightArrowTS" src="https://i.pinimg.com/originals/4c/03/b3/4c03b3f0f339580c27e9efab2dc2a744.png" alt="" onClick={handleNext} />
        </div>
    );
};

export default CarouselBoxTShirt;