import React from 'react';
import Header from "./conponents/Header/Header";
import TShirt from "./pages/TShirt/TShirt";
import Footer from "./conponents/Footer/Footer";
import './App.css'
import PurpleHeader from "./conponents/PurpleHeader/PurpleHeader";
import Zippo from "./pages/Zippo/Zippo";
import PreFooter from "./conponents/PreFooter/PreFooter";
import Mbappe from "./pages/Mbappe/Mbappe";



const App = () => {
    return (
        <div className="App">
            <PurpleHeader/>
            {/*<Header/>*/}
            <TShirt/>
            <Zippo/>
            <Mbappe/>
            <PreFooter/>
            <Footer/>
        </div>
    );
};

export default App;