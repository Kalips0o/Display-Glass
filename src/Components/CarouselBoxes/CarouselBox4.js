import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Fly from '../../assets/imgOurProduct/SuperBrightVideoModules/SuperBrightVideoModules1.jpg';
import Sky from '../../assets/imgOurProduct/SuperBrightVideoModules/SuperBrightVideoModules2.jpg';
import Sk from '../../assets/imgOurProduct/SuperBrightVideoModules/SuperBrightVideoModules3.jpg';

//Карусель для  "Сверхъяркие видеомодули"
export default class CarouselBox4 extends Component {
    render() {
        return (
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                        className='d-block w-60 img-fluid'
                        src={Fly}
                        alt='fly'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-60 img-fluid'
                        src={Sky}
                        alt='fly'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-60 img-fluid'
                        src={Sk}
                        alt='fly'
                    />
                </Carousel.Item>

            </Carousel>

        )
    }
}
