import React from "react";
import Nav from "./components/Nav";
import Poster from "./components/Poster";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);
  

  let cardDetails = [
    {
      TopSale: true,
      cardImg: "/Images/prod1.png",
      productName: "Dell Latitude",
      starRating: 5,
      mrp: 20000,
      offer: 20,
    },
    {
      TopSale: true,
      cardImg: "/Images/prod2.png",
      productName: "Dell Inspiron",
      starRating: 3,
      mrp: 65000,
      offer: 10,
    },
    {
      TopSale: false,
      cardImg: "/Images/prod3.png",
      productName: "Dell Smartchoice",
      starRating: 4,
      mrp: 100000,
      offer: 25,
    },
    {
      TopSale: true,
      cardImg: "/Images/prod4.png",
      productName: "Wireless keyboard and mouse",
      starRating: 5,
      mrp: 3000,
      offer: 40,
    },
    {
      TopSale: false,
      cardImg: "/Images/prod5.png",
      productName: "Dell Alienware",
      starRating: 3,
      mrp: 394670,
      offer: 18,
    },
    {
      TopSale: false,
      cardImg: "/Images/prod6.png",
      productName: "Dell Alienware x16",
      starRating: 4,
      mrp: 547508,
      offer: 17,
    },
    {
      TopSale: false,
      cardImg: "/Images/prod7.png",
      productName: "Urban Jungle by Safari",
      starRating: 4,
      mrp: 25000,
      offer: 30,
    },
    {
      TopSale: true,
      cardImg: "/Images/prod8.png",
      productName: "Urban Jungle by Safari 2",
      starRating: 5,
      mrp: 10000,
      offer: 60,
    },
    
   
   
  ];

  for (let i = 1; i <= cardDetails.length; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }

  cardDetails = cardDetails.map((ele, index) => {
    ele.id = index + 1;
    ele.btnTxt = btnText[index].txt;
    return ele;
  });

  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);
    let buttonIndex = btnText.findIndex((ele) => product.id === ele.id);
    

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      btnText[buttonIndex].txt = "Remove from Cart";
      setBtnText([...btnText]);
     
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));

      btnText[buttonIndex].txt = "Add to Cart";
      setBtnText([...btnText]);
      
    }
  };

  return (
    <>
      <header>
        <Nav navDetails={cartData} />
      </header>
      <main className="main-div">
        <section>
          <Poster />
        </section>
        <section className="py-3">
          <div className="container px-3 px-lg-4 mt-5">
            <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {cardDetails.map((card, index) => {
                return <Card key={index++} props={card} press={press} />;
              })}
            </div>
          </div>
        </section>
      </main>
      <footer class="py-5 bg-dark">
        <Footer />
      </footer>
    </>
  );
}

export default App;