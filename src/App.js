import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Contacts from './Pages/Contacts/Contacts';
import ModifiedVideoModules from "./Pages/Product/ModifiedVideoModules";
import SuperBrightVideoModules from "./Pages/Product/SuperBrightVideoModules";
import Product from "./Pages/Product/Product";
import TouchScreens from "./Pages/Product/TouchScreens";
import AugmentedRealitySystems from "./Pages/Product/AugmentedRealitySystems";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div className='main'>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route exact path="/about" render={() => <About/>}/>
                    <Route exact path="/product" render={() => <Product/>}/>
                    <Route exact path="/service" render={() => <Service/>}/>
                    <Route path="/contacts" render={() => <Contacts/>}/>
                    <Route path="/product1" render={() => <ModifiedVideoModules/>}/>
                    <Route path="/product2" render={() => <SuperBrightVideoModules/>}/>
                    <Route path="/product3" render={() => <TouchScreens/>}/>
                    <Route path="/product4" render={() => <AugmentedRealitySystems/>}/>


                </div>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
