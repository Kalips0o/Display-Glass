import React from 'react';
import {Col, Container, Row, Tab} from 'react-bootstrap';
import ModuleList from '../../Components/Containers/module-list';
import Details from '../../Components/Containers/details-list';
import s from '../About/About.module.css';
import p from './Product.module.css';


const Product = () => (
  <>
    <div className={s.pageTitle}>
      <div className={s.center}>
        <Container>
          <h1> Разработки </h1>
        </Container>
      </div>
    </div>


    <Container style={{paddingTop: '2%', paddingBottom: '2%'}}>
      <Tab.Container id='ledt-tabs-example'>
        <Row className={p.row}>
          <Col className={p.col3}>
            <div>
              <h5> Доработанные видеомодули </h5>
              <ModuleList/>
            </div>
            <h5> Сверхъяркие видеомодули </h5>
            <h5> Сенсорные экраны </h5>
            <h5> Системы дополненной реальности </h5>


          </Col>
          <Col>
            <Details/>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  </>
)


export default Product;