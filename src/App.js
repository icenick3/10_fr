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
import Reviews from "./conponents/Reviews/Reviews";
import ReviewsZippo from "./conponents/ReviewsZippo/Reviews";
import SizeGuide from "./conponents/SizeGuide/SizeGuide";
import ReviewsMbappe from "./conponents/ReviewsMbappe/Reviews";
import ReviewsLight from "./conponents/ReviewsLight/Reviews";
import ReviewsDecanter from "./conponents/ReviewsDecanter/Reviews";
import ReviewsPillow from "./conponents/ReviewsPillow/Reviews";
import ReviewsCork from "./conponents/ReviewsCork/Reviews";
import ReviewsMill from "./conponents/ReviewsMill/Reviews";
import ReviewsFlag from "./conponents/ReviewsFlag/Reviews";
import ReviewsMicro from "./conponents/ReviewsMicro/Reviews";
import SideMenu from "./conponents/SideMenu/SideMenu";
import AboutUsPopup from "./conponents/AboutUsPopup/AboutUsPopup";
import ContactUs from "./conponents/ContactUs/ContactUs";
import FAQ from "./conponents/FAQ/FAQ";
import ReturnPolicy from "./conponents/ReturnPolicy/ReturnPolicy";
import Shiping from "./conponents/Shiping/Shiping";
import RunningText from "./conponents/RunningText/RunningText";


const App = () => {


    const [language, setLanguage] = useState('EN')

    const [smallTS, setSmallTS] = useState(true)
    const [smallTS2, setSmallTS2] = useState(true)
    const [smallZippo, setSmallZippo] = useState(true)
    const [smallMbappe, setSmallMbappe] = useState(true)
    const [smallMbappe2, setSmallMbappe2] = useState(true)
    const [smallLight, setSmallLight] = useState(true)
    const [smallDecanter, setSmallDecanter] = useState(true)
    const [smallDecanter2, setSmallDecanter2] = useState(true)
    const [smallPillow, setSmallPillow] = useState(true)
    const [smallCork, setSmallCork] = useState(true)
    const [smallCork2, setSmallCork2] = useState(true)
    const [smallMill, setSmallMill] = useState(true)
    const [smallFlag, setSmallFlag] = useState(true)
    const [smallFlag2, setSmallFlag2] = useState(true)
    const [smallMicro, setSmallMicro] = useState(true)



    const [activeSideMenu, setActiveSideMenu] = useState(false)
    const [returnPolicy, setReturn] = useState(false)
    const [about, setAbout] = useState(false)
    const [faq, setFaq] = useState(false)
    const [contactUS, setContactUS] = useState(false)
    const [shiping, setShiping] = useState(false)


    const [showGuide, setShowGuide] = useState(false)
    const [showReviewsTs, setShowReviewsTs] = useState(false)
    const [showReviewsZippo, setShowReviewsZippo] = useState(false)
    const [showReviewsMbappe, setShowReviewsMbappe] = useState(false)
    const [showReviewsLight, setShowReviewsLight] = useState(false)
    const [showReviewsDecanter, setShowReviewsDecanter] = useState(false)
    const [showReviewsPillow, setShowReviewsPillow] = useState(false)
    const [showReviewsCork, setShowReviewsCork] = useState(false)
    const [showReviewsMill, setShowReviewsMill] = useState(false)
    const [showReviewsFlag, setShowReviewsFlag] = useState(false)
    const [showReviewsMicro, setShowReviewsMicro] = useState(false)





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


    const curRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (curRef.current) {
            curRef.current.scrollIntoView({behavior: 'auto', block: 'end'});
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

    }, [currentSlide])

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
            {/*<PurpleHeader/>*/}
            <div ref={curRef}></div>
            <Header setActive={setActiveSideMenu} setLang={setLanguage}/>
            <RunningText lang={language} phone={isScreenWidthAbove500}/>
            {isScreenWidthAbove500 && <div className={smallTS && smallZippo ? "flexxx" : ""}>
                {((smallZippo) || (!smallZippo && smallTS2)) &&
                    <TShirt lang={language} date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}
                            showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                            setShowGuide={setShowGuide} phone={isScreenWidthAbove500}/>}
                <Zippo lang={language} date={formattedDate} date2={formattedDate2} small={smallZippo} setSmall={setSmallZippo}
                       showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo} phone={isScreenWidthAbove500}/>
                {((!smallZippo && smallTS2) && (smallZippo && smallTS)) &&
                    <TShirt lang={language} date={formattedDate} date2={formattedDate2} small={smallTS2} setSmall={setSmallTS2}
                            showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                            setShowGuide={setShowGuide} phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallMbappe && smallLight ? "flexxx" : ""}>
                {((smallLight) || (!smallLight && smallMbappe2)) &&
                    <Mbappe lang={language} date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe} setShowReviews={setShowReviewsMbappe} phone={isScreenWidthAbove500}/>}
                <Light lang={language} date={formattedDate} date2={formattedDate2} small={smallLight} setSmall={setSmallLight} setShowReviews={setShowReviewsLight} phone={isScreenWidthAbove500}/>
                {((!smallLight && smallMbappe2) && (smallLight && smallMbappe)) &&
                    <Mbappe lang={language} date={formattedDate} date2={formattedDate2} small={smallMbappe2} setSmall={setSmallMbappe2} setShowReviews={setShowReviewsMbappe} phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallDecanter && smallPillow ? "flexxx" : ""}>
                {((smallPillow) || (!smallPillow && smallDecanter2)) && <Decanter lang={language} date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                          setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter} phone={isScreenWidthAbove500}/>}
                <Pillow lang={language} date={formattedDate} date2={formattedDate2} small={smallPillow} setSmall={setSmallPillow} setShowReviews={setShowReviewsPillow} phone={isScreenWidthAbove500}/>
                {((!smallPillow && smallDecanter2) && (smallPillow && smallDecanter)) && <Decanter lang={language} date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                           setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter} phone={isScreenWidthAbove500}/>}

            </div>}
            {isScreenWidthAbove500 && <div className={smallCork && smallMill ? "flexxx" : ""}>
                {((smallMill) || (!smallMill && smallCork2)) &&
                    <Cork lang={language} date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork} phone={isScreenWidthAbove500}/>}
                <Mill lang={language} date={formattedDate} date2={formattedDate2} small={smallMill} setSmall={setSmallMill} setShowReviews={setShowReviewsMill} phone={isScreenWidthAbove500}/>
                {((!smallMill && smallCork2) && (smallMill && smallCork)) &&
                    <Cork lang={language} date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork} phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallFlag && smallMicro ? "flexxx" : ""}>
                {((smallMicro) || (!smallMicro && smallFlag2)) &&
                    <Flag lang={language} date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag} phone={isScreenWidthAbove500}/>}
                <Microphone lang={language} date={formattedDate} date2={formattedDate2} small={smallMicro} setSmall={setSmallMicro} setShowReviews={setShowReviewsMicro} phone={isScreenWidthAbove500}/>
                {((!smallMicro && smallFlag2) && (smallMicro && smallFlag)) &&
                    <Flag lang={language} date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag} phone={isScreenWidthAbove500}/>}
            </div>}
            {!isScreenWidthAbove500 && <Slider {...settings}>
                <div>
                    <div className="my-div">
                        <TShirt lang={language} date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}
                                showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                                setShowGuide={setShowGuide}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Zippo lang={language} date={formattedDate} date2={formattedDate2} small={smallZippo} setSmall={setSmallZippo}
                               showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Mbappe lang={language} date={formattedDate} date2={formattedDate2} small={smallMbappe}
                                setSmall={setSmallMbappe} setShowReviews={setShowReviewsMbappe}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Light lang={language} date={formattedDate} date2={formattedDate2} small={smallLight} setSmall={setSmallLight} setShowReviews={setShowReviewsLight}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Decanter lang={language} date={formattedDate} date2={formattedDate2} small={smallDecanter}
                                  setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Pillow lang={language} date={formattedDate} date2={formattedDate2} small={smallPillow}
                                setSmall={setSmallPillow} setShowReviews={setShowReviewsPillow}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Cork lang={language} date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Mill lang={language} date={formattedDate} date2={formattedDate2} small={smallMill} setSmall={setSmallMill} setShowReviews={setShowReviewsMill}/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <Flag lang={language} date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag}/>
                    </div>
                </div>
                <div>
                    <div className="my-div"><Microphone lang={language} date={formattedDate} date2={formattedDate2} small={smallMicro}
                                                        setSmall={setSmallMicro} setShowReviews={setShowReviewsMicro}/></div>
                </div>
            </Slider>}
            <br/>
            <br/>
            <br/>
            <SizeGuide showGuide={showGuide} setShowGuide={setShowGuide} lang={language}/>
            <ReviewsZippo lang={language} showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}/>
            <Reviews showReviews={showReviewsTs} setShowReviews={setShowReviewsTs} lang={language}/>
            <ReviewsMbappe lang={language} showReviews={showReviewsMbappe} setShowReviews={setShowReviewsMbappe}/>
            <ReviewsLight lang={language} showReviews={showReviewsLight} setShowReviews={setShowReviewsLight}/>
            <ReviewsDecanter lang={language} showReviews={showReviewsDecanter} setShowReviews={setShowReviewsDecanter}/>
            <ReviewsPillow lang={language} showReviews={showReviewsPillow} setShowReviews={setShowReviewsPillow}/>
            <ReviewsCork lang={language} showReviews={showReviewsCork} setShowReviews={setShowReviewsCork}/>
            <ReviewsMill lang={language} showReviews={showReviewsMill} setShowReviews={setShowReviewsMill}/>
            <ReviewsFlag lang={language} showReviews={showReviewsFlag} setShowReviews={setShowReviewsFlag}/>
            <ReviewsMicro lang={language} showReviews={showReviewsMicro} setShowReviews={setShowReviewsMicro}/>
            <SideMenu lang={language} activeSideMenu={activeSideMenu} setActiveSideMenu={setActiveSideMenu} setReturn={setReturn}
                      setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFAQ={setFaq}/>
            <AboutUsPopup lang={language} setAbout={setAbout} about={about}/>
            <ContactUs lang={language} setContactUs={setContactUS} contact={contactUS}/>
            <FAQ lang={language} setFAQ={setFaq} FAQ={faq}/>
            <ReturnPolicy lang={language} setReturn={setReturn} returnPol={returnPolicy}/>
            <Shiping lang={language} setShiping={setShiping} shiping={shiping}/>
            <PreFooter lang={language}/>
            <Footer lang={language} setReturn={setReturn} setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFaq={setFaq}/>
        </div>
    );
};

export default App;