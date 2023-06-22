import React, {useEffect, useRef, useState} from 'react';
import Header from "./conponents/Header/Header";
import PreFooter from "./conponents/PreFooter/PreFooter";
import './App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SizeGuide from "./conponents/SizeGuide/SizeGuide";
import ReviewsMill from "./conponents/ReviewsMill/Reviews";
import SideMenu from "./conponents/SideMenu/SideMenu";
import RunningText from "./conponents/RunningText/RunningText";
import AboutUsPopup from "./conponents/AboutUsPopup/AboutUsPopup";
import FAQ from "./conponents/FAQ/FAQ";
import ContactUs from "./conponents/ContactUs/ContactUs";
import ReturnPolicy from "./conponents/ReturnPolicy/ReturnPolicy";
import Shiping from "./conponents/Shiping/Shiping";
import Form from "./conponents/form/Form";
import Pampers from "./pages/Pampers/Pampers";
import ReviewsPampers from "./conponents/ReviewsPampers/Reviews";
import Towel from "./pages/Towel/Towel";
import ReviewsTowel from "./conponents/ReviewsTowel/Reviews";
import Bodyk from "./pages/Bodyk/Bodyk";
import ReviewsBodyk from "./conponents/ReviewsBodyk/Reviews";
import Ergo from "./pages/Ergo/Ergo";
import ReviewsErgo from "./conponents/ReviewsErgo/Reviews";
import Camera from "./pages/Camera/Camera";
import ReviewsCamera from "./conponents/ReviewsCamera/Reviews";
import Cup from "./pages/Cup/Cup";
import ReviewsCup from "./conponents/ReviewsCup/Reviews";
import Diaper from "./pages/Diaper/Diaper";
import ReviewsDiaper from "./conponents/ReviewsDiaper/Reviews";
import BodykGirl from "./pages/BodykGirl/Bodyk";
import Medical from "./pages/Medical/Medical";
import ReviewsMedical from "./conponents/ReviewsMedical/Reviews";
import Peepow from "./pages/Peepow/Peepow";
import ReviewsPeepow from "./conponents/ReviewsPeepow/Reviews";
import FooterNew from "./conponents/FooterNew/FooterNew";


const App = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const [language, setLanguage] = useState('FR')


    const [form, setForm] = useState(false)

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


    const [clickHeader, setClickHeader] = useState(false)


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

    }, [clickHeader, currentSlide])


    const CustomPrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                id="cusPrev"
                style={{...style, display: 'block'}}
                onClick={onClick}
            />
        );
    };

    const CustomNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                id="cusNext"
                style={{...style, display: 'block'}}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>, // Компонент для наступної стрілки
        arrows: (smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) ? true : false,
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

    const href1 = document.querySelector('#buttonOffer1').href
    const href2 = document.querySelector('#buttonOffer2').href
    const href3 = document.querySelector('#buttonOffer3').href
    const href4 = document.querySelector('#buttonOffer4').href
    const href5 = document.querySelector('#buttonOffer5').href
    const href6 = document.querySelector('#buttonOffer6').href
    const href7 = document.querySelector('#buttonOffer7').href
    const href8 = document.querySelector('#buttonOffer8').href
    const href9 = document.querySelector('#buttonOffer9').href
    const href10 = document.querySelector('#buttonOffer10').href

    return (
        <div className="App">
            <div ref={curRef}></div>
            <Header setClick={setClickHeader} setActive={setActiveSideMenu} setLang={setLanguage} click={clickHeader}/>
            <RunningText lang={language} phone={isScreenWidthAbove500}/>
            {isScreenWidthAbove500 && <div className={smallTS && smallZippo ? "flexxx" : ""}>
                {((smallZippo) || (!smallZippo && smallTS2)) &&
                    <Towel setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2} small={smallTS}
                           setSmall={setSmallTS}
                           showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                           setShowGuide={setShowGuide} phone={isScreenWidthAbove500}/>}
                <Bodyk setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2} small={smallZippo}
                       setSmall={setSmallZippo}
                       showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}
                       phone={isScreenWidthAbove500}/>
                {((!smallZippo && smallTS2) && (smallZippo && smallTS)) &&
                    <Towel setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                           small={smallTS2} setSmall={setSmallTS2}
                           showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                           setShowGuide={setShowGuide} phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallMbappe && smallLight ? "flexxx" : ""}>
                {((smallLight) || (!smallLight && smallMbappe2)) &&
                    <Camera setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallMbappe} setSmall={setSmallMbappe} setShowReviews={setShowReviewsMbappe}
                            phone={isScreenWidthAbove500}/>}
                <Medical setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                         small={smallLight} setSmall={setSmallLight} setShowReviews={setShowReviewsLight}
                         phone={isScreenWidthAbove500}/>
                {((!smallLight && smallMbappe2) && (smallLight && smallMbappe)) &&
                    <Camera setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallMbappe2} setSmall={setSmallMbappe2} setShowReviews={setShowReviewsMbappe}
                            phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallDecanter && smallPillow ? "flexxx" : ""}>
                {((smallPillow) || (!smallPillow && smallDecanter2)) &&
                    <Pampers setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                             small={smallDecanter}
                             setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter}
                             phone={isScreenWidthAbove500}/>}
                <Cup setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2} small={smallPillow}
                     setSmall={setSmallPillow} setShowReviews={setShowReviewsPillow} phone={isScreenWidthAbove500}/>
                {((!smallPillow && smallDecanter2) && (smallPillow && smallDecanter)) &&
                    <Pampers setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                             small={smallDecanter}
                             setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter}
                             phone={isScreenWidthAbove500}/>}

            </div>}
            {isScreenWidthAbove500 && <div className={smallCork && smallMill ? "flexxx" : ""}>
                {((smallMill) || (!smallMill && smallCork2)) &&
                    <Diaper setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork}
                            phone={isScreenWidthAbove500}/>}
                <BodykGirl setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                           small={smallMill} setSmall={setSmallMill} setShowReviews={setShowReviewsMill}
                           phone={isScreenWidthAbove500}/>
                {((!smallMill && smallCork2) && (smallMill && smallCork)) &&
                    <Diaper setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork}
                            phone={isScreenWidthAbove500}/>}
            </div>}
            {isScreenWidthAbove500 && <div className={smallFlag && smallMicro ? "flexxx" : ""}>
                {((smallMicro) || (!smallMicro && smallFlag2)) &&
                    <Peepow setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag}
                            phone={isScreenWidthAbove500}/>}
                <Ergo setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2} small={smallMicro}
                      setSmall={setSmallMicro} setShowReviews={setShowReviewsMicro} phone={isScreenWidthAbove500}/>
                {((!smallMicro && smallFlag2) && (smallMicro && smallFlag)) &&
                    <Peepow setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                            small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag}
                            phone={isScreenWidthAbove500}/>}
            </div>}
            {/*{!isScreenWidthAbove500 && <Slider {...settings} initialSlide={product}>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Towel setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                   small={smallTS} setSmall={setSmallTS}*/}
            {/*                   showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}*/}
            {/*                   setShowGuide={setShowGuide}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Bodyk setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                   small={smallZippo} setSmall={setSmallZippo}*/}
            {/*                   showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Camera setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                    small={smallMbappe}*/}
            {/*                    setSmall={setSmallMbappe} setShowReviews={setShowReviewsMbappe}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Medical setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                     small={smallLight} setSmall={setSmallLight} setShowReviews={setShowReviewsLight}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Pampers setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                     small={smallDecanter}*/}
            {/*                     setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Cup setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                 small={smallPillow}*/}
            {/*                 setSmall={setSmallPillow} setShowReviews={setShowReviewsPillow}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Diaper setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                    small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <BodykGirl setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                       small={smallMill} setSmall={setSmallMill} setShowReviews={setShowReviewsMill}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Peepow setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                    small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="my-div">*/}
            {/*            <Ergo setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}*/}
            {/*                  small={smallMicro}*/}
            {/*                  setSmall={setSmallMicro} setShowReviews={setShowReviewsMicro}/></div>*/}
            {/*    </div>*/}
            {/*</Slider>}*/}
            <div>
                <div className="flex1">
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallMicro) &&
                        <Ergo href={href1} setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                              small={smallMicro}
                              setSmall={setSmallMicro} setShowReviews={setShowReviewsMicro}/>}
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallZippo) &&
                        <Bodyk href={href2}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                               small={smallZippo} setSmall={setSmallZippo}
                               showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}/>}
                </div>
                <div className="flex1">
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallMbappe) &&
                        <Camera href={href3}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                small={smallMbappe}
                                setSmall={setSmallMbappe} setShowReviews={setShowReviewsMbappe}/>}
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallLight) &&
                        <Medical href={href4}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                 small={smallLight} setSmall={setSmallLight} setShowReviews={setShowReviewsLight}/>}
                </div>
                <div className="flex1">
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallDecanter) &&
                        <Pampers href={href5}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                 small={smallDecanter}
                                 setSmall={setSmallDecanter} setShowReviews={setShowReviewsDecanter}/>}
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallPillow) &&
                        <Cup href={href6}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                             small={smallPillow}
                             setSmall={setSmallPillow} setShowReviews={setShowReviewsPillow}/>}
                </div>
                <div className="flex1">
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallCork) &&
                        <Diaper href={href7}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                small={smallCork} setSmall={setSmallCork} setShowReviews={setShowReviewsCork}/>}
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallMill) &&
                        <BodykGirl href={href8}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                   small={smallMill} setSmall={setSmallMill} setShowReviews={setShowReviewsMill}/>}
                </div>
                <div className="flex1">
                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallFlag) &&
                        <Peepow href={href9}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                                small={smallFlag} setSmall={setSmallFlag} setShowReviews={setShowReviewsFlag}/>}

                    {((smallFlag && smallTS && smallZippo && smallDecanter && smallPillow && smallMill && smallCork && smallMicro && smallLight && smallMbappe) || !smallTS) &&
                        <Towel href={href10}  setForm={setForm} lang={language} date={formattedDate} date2={formattedDate2}
                               small={smallTS}
                               setSmall={setSmallTS}
                               showReviews={showReviewsTs} setShowReviews={setShowReviewsTs}
                               setShowGuide={setShowGuide}/>}

                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <SizeGuide showGuide={showGuide} setShowGuide={setShowGuide} lang={language}/>
            <ReviewsBodyk lang={language} showReviews={showReviewsZippo} setShowReviews={setShowReviewsZippo}/>
            <ReviewsTowel showReviews={showReviewsTs} setShowReviews={setShowReviewsTs} lang={language}/>
            <ReviewsCamera lang={language} showReviews={showReviewsMbappe} setShowReviews={setShowReviewsMbappe}/>
            <ReviewsMedical lang={language} showReviews={showReviewsLight} setShowReviews={setShowReviewsLight}/>
            <ReviewsPampers lang={language} showReviews={showReviewsDecanter} setShowReviews={setShowReviewsDecanter}/>
            <ReviewsCup lang={language} showReviews={showReviewsPillow} setShowReviews={setShowReviewsPillow}/>
            <ReviewsDiaper lang={language} showReviews={showReviewsCork} setShowReviews={setShowReviewsCork}/>
            <ReviewsMill lang={language} showReviews={showReviewsMill} setShowReviews={setShowReviewsMill}/>
            <ReviewsPeepow lang={language} showReviews={showReviewsFlag} setShowReviews={setShowReviewsFlag}/>
            <ReviewsErgo lang={language} showReviews={showReviewsMicro} setShowReviews={setShowReviewsMicro}/>
            <SideMenu lang={language} activeSideMenu={activeSideMenu} setActiveSideMenu={setActiveSideMenu}
                      setReturn={setReturn}
                      setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFAQ={setFaq}/>
            <AboutUsPopup setAbout={setAbout} about={about} lang={language}/>
            <FAQ setFAQ={setFaq} faq={faq} lang={language}/>
            <ContactUs contact={contactUS} setContactUs={setContactUS} lang={language}/>
            <ReturnPolicy setReturn={setReturn} lang={language} returnPol={returnPolicy}/>
            <Shiping setShiping={setShiping} shiping={shiping} lang={language}/>
            <PreFooter lang={language}/>
            <FooterNew lang={language} setReturn={setReturn} setShiping={setShiping} setAbout={setAbout}
                       setContactUs={setContactUS} setFaq={setFaq}/>
            <Form form={form} setForm={setForm}/>
        </div>
    );
};

export default App;