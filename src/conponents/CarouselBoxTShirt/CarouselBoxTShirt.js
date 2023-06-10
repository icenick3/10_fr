import React, { useEffect, useRef, useState } from 'react';
import './CarouselBoxTShirt.css';

const CarouselBoxTShirt = ({ element }) => {
    const carouselRef = useRef(null);
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedIndexes, setLoadedIndexes] = useState([0]);
    const currRef = useRef();

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % element.length);
    };

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

    useEffect(() => {
        const loadPrevIndex = (currentIndex - 1 + element.length) % element.length;
        const loadNextIndex = (currentIndex + 1) % element.length;
        setLoadedIndexes([loadPrevIndex, currentIndex, loadNextIndex]);
    }, [currentIndex, element]);

    return (
        <div className="carouselTS11" ref={carouselRef} tabIndex="0" >
            <div ref={arrowRef} id="leftArrowTSContainer" onClick={handlePrev}></div>
            <img
                id="leftArrowTS"
                src="https://i.pinimg.com/originals/85/09/c2/8509c26caa1a2b97ce02ab3be3a55826.png"
                alt=""
                onClick={handlePrev}
            />
            {loadedIndexes.map((index) => (
                <img
                    key={index}
                    ref={index === currentIndex ? currRef : null}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                    id="currentImgTS"
                    src={element[index]}
                    alt={`Image ${index}`}
                />
            ))}
            <div
                ref={arrowRef2}
                id="rightArrowTSContainer"
                onClick={handleNext}
            ></div>
            <img
                id="rightArrowTS"
                src="https://i.pinimg.com/originals/85/09/c2/8509c26caa1a2b97ce02ab3be3a55826.png"
                alt=""
                onClick={handleNext}
            />
        </div>
    );
};

export default CarouselBoxTShirt;