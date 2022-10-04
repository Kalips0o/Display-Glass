import React from 'react';
import {Container} from 'react-bootstrap';
import p from './OurProduct.module.css';
import s from '../About/About.module.css';
import {NavLink} from "react-router-dom";
import CarouselBox3 from "../../Components/CarouselBoxes/CarouselBox3";
import CarouselBox4 from "../../Components/CarouselBoxes/CarouselBox4";
import CarouselBox5 from "../../Components/CarouselBoxes/CarouselBox5";
import CarouselBox6 from "../../Components/CarouselBoxes/CarouselBox6";

const Product = () => {
    return (
        <>
            <div className={s.pageTitle}>
                <div className={s.center}>
                    <Container>
                        <h1> Разработки</h1>
                    </Container>
                </div>
            </div>
            <Container>

                <div className={p.flex}>
                    <div className={p.item}>
                        <div>
                            <CarouselBox3/>
                            <NavLink exact to="/product1"
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                     }}>
                                <b> Доработанные видеомодули </b>
                            </NavLink>
                        </div>
                    </div>


                    <div className={p.item}>
                        <div>
                            <CarouselBox4/>
                            <NavLink exact to="/product2"
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                     }}>
                                <b> Сверхъяркие видеомодули </b>
                            </NavLink>
                        </div>
                    </div>


                    <div className={p.item}>
                        <div>
                            <CarouselBox5/>
                            <NavLink exact to="/product3"
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                     }}>
                                <b> Сенсорные экраны </b>
                            </NavLink>
                        </div>
                    </div>


                    <div className={p.item}>
                        <div>
                            <CarouselBox6/>
                            <NavLink exact to="/product4"
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                     }}>
                                <b> Системы дополненной реальности </b>
                            </NavLink>
                        </div>
                    </div>


                    <div className={p.item}>
                        <h3>Не нашли нужную услугу? Звоните:</h3>

                        +375 (25) 964-16-50
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Product;