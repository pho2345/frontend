import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
// import "../img/product-1.jpg";
import Cards from "../card/Card";
import {Col,Row} from "antd";
//import {img1, img2, img3, img4, img5,img6,img7,img8} from "../img";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slide() {
  return (
    
       <Row>
        <Col span ={12} offset={6}>          
        <Carousel breakPoints={breakPoints} enableAutoPlay={true}>
          <Item>
            {/* <img src={img1} alt='Product-1'/> */}
          </Item>
          <Item>
           {/* <img src ={img2} alt='Product 2'/> */}
            </Item>
          <Item>
          {/* <img src ={img3} alt='Product 3'/> */} 
          </Item>
          <Item>
          {/* <img src ={img4} alt='Product 4'/> */}
          </Item>
          <Item>
          {/* <img src ={img5} alt='Product 5'/> */}
          </Item>
          <Item>
          {/* <img src ={img6} alt='Product 6'/> */}
          </Item>
          <Item>
          {/* <img src ={img7} alt='Product 7'/> */}
          </Item>
          <Item>
          {/* <img src ={img8} alt='Product 8'/> */}
          </Item>
        </Carousel>
        </Col>
  </Row>

  );
}

export default Slide