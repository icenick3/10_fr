import React, {useEffect, useRef, useState} from 'react';
import Header from "./conponents/Header/Header";
import TShirt from "./pages/TShirt/TShirt";
import Footer from "./conponents/Footer/Footer";
import './App.css'
import PurpleHeader from "./conponents/PurpleHeader/PurpleHeader";
import Zippo from "./pages/Zippo/Zippo";
import PreFooter from "./conponents/PreFooter/PreFooter";
import Mbappe from "./pages/Mbappe/Mbappe";
import Light from "./pages/Light/Light";
import Decanter from "./pages/Decanter/Decanter";
import Pillow from "./pages/Pillow/Pillow";
import Cork from "./pages/Cork/Cork";
import Mill from "./pages/Mill/Mill";
import Flag from "./pages/Flag/Flag";
import Microphone from "./pages/Microphone/Microphone";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {

    const [smallTS, setSmallTS] = useState(true)
    const [smallZippo, setSmallZippo] = useState(true)
    const [smallMbappe, setSmallMbappe] = useState(true)
    const [smallLight, setSmallLight] = useState(true)
    const [smallDecanter, setSmallDecanter] = useState(true)
    const [smallPillow, setSmallPillow] = useState(true)
    const [smallCork, setSmallCork] = useState(true)
    const [smallMill, setSmallMill] = useState(true)
    const [smallFlag, setSmallFlag] = useState(true)
    const [smallMicro, setSmallMicro] = useState(true)

    const [isScreenWidthAbove500, setIsScreenWidthAbove500] = useState(false);

    useEffect(() => {
        const handleScreenWidth = () => {
            setIsScreenWidthAbove500(window.innerWidth > 500);
        };

        handleScreenWidth(); // Перевірка ширини екрану при завантаженні компонента

        window.addEventListener('resize', handleScreenWidth); // Перевірка ширини екрану при зміні розміру вікна

        return () => {
            window.removeEventListener('resize', handleScreenWidth); // Видалення слухача подій при видаленні компонента
        };
    }, []);

    console.log(isScreenWidthAbove500)
    const curRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        if (curRef.current) {
            curRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
        }
        setSmallCork(true)
        setSmallTS(true)
        setSmallZippo(true)
        setSmallMbappe(true)
        setSmallLight(true)
        setSmallDecanter(true)
        setSmallMill(true)
        setSmallFlag(true)
        setSmallMicro(true)
        setSmallPillow(true)

    },[currentSlide])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current)
    };

    let currentDate = new Date();
    let futureDate = new Date(currentDate.getTime() + (4 * 24 * 60 * 60 * 1000));
    let futureDate2 = new Date(currentDate.getTime() + (6 * 24 * 60 * 60 * 1000));
    let day = futureDate.getDate();
    let day2 = futureDate2.getDate();
    let month = futureDate.getMonth() + 1; // Months in JavaScript start from 0
    let month2 = futureDate2.getMonth() + 1; // Months in JavaScript start from 0

// Format the day and month in a shortened format (e.g., 10.06)
    let formattedDate = ('0' + day).slice(-2) + '.' + ('0' + month).slice(-2);
    let formattedDate2 = ('0' + day2).slice(-2) + '.' + ('0' + month2).slice(-2);


    return (


        <div className="App">
            <PurpleHeader />
            <div ref={curRef}></div>
            {/*<Header/>*/}
            {isScreenWidthAbove500 && <div className={smallTS && smallZippo ? "flexxx" : ""}>
                {(smallZippo || !isScreenWidthAbove500) &&
                    <TShirt date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}/>}
                <Zippo date={formattedDate} date2={formattedDate2} small={smallZippo} setSmall={setSmallZippo}/>
                {(!smallZippo && isScreenWidthAbove500) &&
                    <TShirt date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallMbappe && smallLight ? "flexxx" : ""}>
                {smallLight &&
                    <Mbappe date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe}/>}
                <Light date={formattedDate} date2={formattedDate2} small={smallLight} setSmall={setSmallLight}/>
                {!smallLight &&
                    <Mbappe date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallDecanter && smallPillow ? "flexxx" : ""}>
                {smallPillow && <Decanter date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                          setSmall={setSmallDecanter}/>}
                <Pillow date={formattedDate} date2={formattedDate2} small={smallPillow} setSmall={setSmallPillow}/>
                {!smallPillow && <Decanter date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                           setSmall={setSmallDecanter}/>}

            </div>}
            {isScreenWidthAbove500 &&<div className={smallCork && smallMill ? "flexxx" : ""}>
                {smallMill &&
                    <Cork date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork}/>}
                <Mill date={formattedDate} date2={formattedDate2} small={smallMill} setSmall={setSmallMill}/>
                {!smallMill &&
                    <Cork date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork}/>}
            </div>}
            {isScreenWidthAbove500 &&<div className={smallFlag && smallMicro ? "flexxx" : ""}>
                {smallMicro &&
                    <Flag date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag}/>}
                <Microphone date={formattedDate} date2={formattedDate2} small={smallMicro} setSmall={setSmallMicro}/>
                {!smallMicro &&
                    <Flag date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag}/>}
            </div>}
            {!isScreenWidthAbove500 &&  <Slider {...settings}>
                <div>
                    <div className="my-div">
                        <TShirt date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Zippo date={formattedDate} date2={formattedDate2} small={smallZippo} setSmall={setSmallZippo}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Mbappe date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Light date={formattedDate} date2={formattedDate2} small={smallLight} setSmall={setSmallLight}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Decanter date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                  setSmall={setSmallDecanter}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Pillow date={formattedDate} date2={formattedDate2} small={smallPillow} setSmall={setSmallPillow}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Cork date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Mill date={formattedDate} date2={formattedDate2} small={smallMill} setSmall={setSmallMill}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Flag date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag}/>
                    </div>
                </div>
                <div>
                    <div className="my-div"><Microphone date={formattedDate} date2={formattedDate2} small={smallMicro} setSmall={setSmallMicro}/></div>
                </div>
            </Slider>}
            <br/>
            <br/>
            <br/>
            <PreFooter/>
            <Footer/>
        </div>
    );
};

export default App;