import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  let products = [
    {
      title: " LUX SHOES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6bfb2c064a64c498e57af1700593332_9366/Stan_Smith_Lux_Shoes_White_HQ6785_HM1.jpg",
      price: "175$",
      id: 1,
    },
    {
      title: "BEST SHOES EVER",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38d40c824ed84b12b641af17005a5dec_9366/Stan_Smith_Lux_Shoes_Black_HQ6787_HM1.jpg",
      price: "295$",
      id: 2,
    },
    {
      title: "STAN SMITH LUX SHOES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4948095c2bd04bbcb5c2af1601154a02_9366/Stan_Smith_Lux_Shoes_White_HP2201_HM1.jpg",
      price: "155$",
      id: 3,
    },
    {
      title: "ADILETTE 22 SLIDES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8178cd660e1444549b97ae92012b244d_9366/Adilette_22_Slides_Beige_GX6950_04_standard.jpg",
      price: "55$",
      id: 4,
    },
    {
      title: "ADILETTE 22 SLIDES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e078b59581dc45f39c22af5e014bdc2c_faec/adidas_Basketball_Hoodie_White_IA3439_HM5.jpg",
      price: "55$",
      id: 5,
    },
    {
      title: "ADILETTE 22 SLIDES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c06ee0bcaebc43cdb74caf5e0138bed5_faec/adidas_Basketball_Sweatpants_White_IA3430_HM5.jpg",
      price: "55$",
      id: 6,
    },
    {
      title: "ADILETTE 22 SLIDES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/095f17852a1f4d9d9304af5e01779d4f_faec/adidas_Basketball_Shorts_Green_IA3425_HM5.jpg",
      price: "55$",
      id: 7,
    },
    {
      title: "ADILETTE 22 SLIDES",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8178cd660e1444549b97ae92012b244d_9366/Adilette_22_Slides_Beige_GX6950_04_standard.jpg",
      price: "55$",
      id: 8,
    },
  ];
  return (
    <div className="d-flex justify-content-between flex-wrap container mt-5 mb-5 ">
      {products.map((item) => (
        <Card
          onClick={() => setSelectedProduct(item.id)}
          key={item.id}
          style={{
            width: "15rem",
            border: selectedProduct === item.id ? "2px solid black" : "",
          }}
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button variant="warning">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
