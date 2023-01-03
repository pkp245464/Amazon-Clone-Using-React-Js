import React from 'react';
import "./Home.css";
import Product from './Product';

//Another Method - 1
//Json object
// const data = [
//   {
//     "id":"12321341",
//     "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
//     "price":11.96,
//     "rating":5,
//     "image": "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
//   },
//   {
//     "id":"12321341",
//     "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
//     "price":11.96,
//     "rating":5,
//     "image": "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
//   }
// ]

function Home() {
  return (
    <div className="home">
        <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="">
        </img>

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          
          {/* Another Method - 1 Excess */}
          {/* {data.map(item=>(
            <Product id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image}/>
          ))} */}
          
        <Product
          id="12321341"
          title="The Ramayana and The Great Mahabharata story book for Kids in Hindi"
          price={243}
          rating={5}
          image="https://m.media-amazon.com/images/I/91hGk76F1wL.jpg"
        />  
        <Product
          id="12321342"
          title="Premchand - Novels (Set of 8 Books) (Hindi) - Premasharam, Gaban, Nirmala, Rangbhumi, Karmbhumi, Vardaan, Godan, Pratigya"
          price={729}
          rating={5}
          image="https://m.media-amazon.com/images/I/61xw-kxY8HS.jpg"
        />
      </div>

        <div className="home__row">
        <Product
          id="12321343"
          title="Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Silver"
          price={306990}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg"
        />  
        <Product
          id="12321344"
          title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 256GB) - Space Grey (6th Generation)"
          price={137990}
          rating={4}
          image="https://m.media-amazon.com/images/I/81hAx31maUL._SL1500_.jpg"
        />
          <Product
          id="12321345"
          title="Apple iPhone 14 Pro Max 256GB Deep Purple"
          price={140550}
          rating={4}
          image="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
        />           
        </div>
          
        <div className="home__row">
        <Product
          id="12321346"
          title="Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV KD-75X80K (Black)"
          price={170990}
          rating={5}
          image="https://m.media-amazon.com/images/I/81L7xr3NeHL._SL1500_.jpg"
        />
        </div>
        
        <div className="home__row">
        <Product
          id="12321347"
          title="Happilo Premium Dry Fruits | California Almonds 200g, Whole Cashews 200g, Raisins 250g and California Walnuts inshell 200g Combo Pack"
          price={669}
          rating={4}
          image="https://m.media-amazon.com/images/I/81-4+Fj7fxL._SL1500_.jpg"
        />  
        <Product
          id="12321348"
          title="Aashirvaad Shudh Chakki Atta, 10kg Pack"
          price={405}
          rating={5}
          image="https://m.media-amazon.com/images/I/81pDk4-gYQL._SL1500_.jpg"
        />
          <Product
          id="12321349"
          title="MDH Kitchen King Mixed Spices Powder, 100g"
          price={81}
          rating={4}
          image="https://m.media-amazon.com/images/I/81mzyXW-PPL._SL1500_.jpg"
        />           
        </div>
        
        <div className="home__row">          
        <Product
          id="123213410"
          title="Marshall Woburn II 130 Watt Wireless Bluetooth Speaker (White) (1002491)"
          price={49999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81ZTLg1BHqL._SL1500_.jpg"
        />  
        <Product
          id="123213411"
          title="Mi Corded & Cordless Waterproof Beard Trimmer with Fast Charging - 40 length settings, Black"
          price={1290}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ApUe3q-PL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123213412"
          title="Sony Alpha ILCE-7RM4A FF 61.0MP MD SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, Real time Animal Eye AF, Tiltable LCD)"
          price={248989}
          rating={5}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71cWQ3Yr8NL._SL1500_.jpg"
        />  
        <Product
          id="12321313"
          title="Shure MV7 USB Podcast Microphone,Built-In Headphone Output, All Metal USB/XLR Dynamic Mic, Voice-Isolating Technolog"
          price={23124}
          rating={5}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81ZHXEuhgIL._SL1500_.jpg"
        />
          <Product
          id="12321327"
          title="DJI MINI SE Fly More Combo - Camera Drone with 3-Axis Gimbal, 2.7K Camera, GPS, 30-min Flight Time, Reduced Weight, Less Than 0.55lbs / 249 Gram Mini Drone, Gray"
          price={69990}
          rating={5}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51JrEJNPrEL._SL1500_.jpg"
        />           
      </div>

    </div>
  )
}

export default Home;