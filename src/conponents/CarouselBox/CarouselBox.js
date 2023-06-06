import React, {useEffect, useRef, useState} from 'react';
import './CarouselBox.css'


const CarouselBox = ({element}) => {

    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null);
    const currRef = useRef()
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % element.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? element.length - 1 : prevIndex - 1
        );
    };

    useEffect(()=>{
        if (currentIndex === 0) {
            currRef.current.style = `width: 400px`
        } else {
            currRef.current.style = `width: 200px`
        }
    },[currentIndex])

    useEffect(() => {
        const element = carouselRef.current;
        const height = element.clientHeight;
        arrowRef.current.style = `height: ${height}px`
        arrowRef2.current.style = `height: ${height}px`
    }, [currentIndex]);


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
        <div className="carousel" ref={carouselRef} tabIndex="0">
            <div ref={arrowRef} id="leftArrowContainer" onClick={handlePrev}>
                <img id="leftArrow" src="https://i.pinimg.com/originals/4c/03/b3/4c03b3f0f339580c27e9efab2dc2a744.png" alt="" />
            </div>
            <img ref={currRef} id="currentImg" src={element[currentIndex]} alt={`Image ${currentIndex}`} />
            <div ref={arrowRef2} id="rightArrowContainer" onClick={handleNext}>
                <img id="rightArrow" src="https://i.pinimg.com/originals/4c/03/b3/4c03b3f0f339580c27e9efab2dc2a744.png" alt="" />
            </div>
        </div>
    );
};

export default CarouselBox;