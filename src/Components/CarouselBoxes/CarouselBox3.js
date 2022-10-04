import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Fly from '../../assets/imgOurProduct/ModifiedVideoModules/VideoModule1.jpg';
import Sky from '../../assets/imgOurProduct/ModifiedVideoModules/VideoModule2.jpg';
import Sk from '../../assets/imgOurProduct/ModifiedVideoModules/VideoModule3.jpg';

//Карусель для  "Доработанные видеомодули"
export default class CarouselBox3 extends Component {
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
