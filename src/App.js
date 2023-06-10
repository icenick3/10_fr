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
import video from "./KorolevskoederevoTheKingTree.mp4"
import {Player} from 'video-react';
import ReactPlayer from 'react-player';


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

    let
        currentDate = new Date();
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
            <PurpleHeader/>
            {/*<Header/>*/}
            <div className={smallTS && smallZippo ? "flexxx" : ""}>
                {smallZippo &&
                    <TShirt date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}/>}
                <Zippo date={formattedDate} date2={formattedDate2} small={smallZippo} setSmall={setSmallZippo}/>
                {!smallZippo &&
                    <TShirt date={formattedDate} date2={formattedDate2} small={smallTS} setSmall={setSmallTS}/>}
            </div>
            <div className={smallMbappe && smallLight ? "flexxx" : ""}>
                {smallLight &&
                    <Mbappe date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe}/>}
                <Light date={formattedDate} date2={formattedDate2} small={smallLight} setSmall={setSmallLight}/>
                {!smallLight &&
                    <Mbappe date={formattedDate} date2={formattedDate2} small={smallMbappe} setSmall={setSmallMbappe}/>}
            </div>
            <div className={smallDecanter && smallPillow ? "flexxx" : ""}>
                {smallPillow && <Decanter date={formattedDate} date2={formattedDate2} small={smallDecanter}
                           setSmall={setSmallDecanter}/>}
                <Pillow date={formattedDate} date2={formattedDate2} small={smallPillow} setSmall={setSmallPillow}/>
                {!smallPillow && <Decanter date={formattedDate} date2={formattedDate2} small={smallDecanter}
                           setSmall={setSmallDecanter}/>}

            </div>
            <div className={smallCork && smallMill ? "flexxx" : ""}>
                {smallMill && <Cork date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork}/>}
                <Mill date={formattedDate} date2={formattedDate2} small={smallMill} setSmall={setSmallMill}/>
                {!smallMill && <Cork date={formattedDate} date2={formattedDate2} small={smallCork} setSmall={setSmallCork}/>}
            </div>
            <div className={smallFlag && smallMicro ? "flexxx" : ""}>
                {smallMicro && <Flag date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag}/>}
                <Microphone date={formattedDate} date2={formattedDate2} small={smallMicro} setSmall={setSmallMicro}/>
                {!smallMicro && <Flag date={formattedDate} date2={formattedDate2} small={smallFlag} setSmall={setSmallFlag}/>}
            </div>

            <PreFooter/>
            <Footer/>
        </div>
    );
};

export default App;