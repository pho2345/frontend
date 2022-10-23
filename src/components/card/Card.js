import React from 'react'
import { Button, Card,Row,Col } from 'antd';



const { Meta } = Card;
export const Cards = () => (
  <Row gutter={[16, 16]}>
    <Col span ={8}>
  <Card
    hoverable
    style={{
      width: 240
    }}
    cover={{title: 'Product 1'}}
    >
    <Meta  title="thit" description="ngon ngo" />
    
  </Card>
  </Col>
  </Row>
);
export default Cards
