import React from "react";
import "./Home.css";
import Product from  "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    
                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/10/iStock-ecomm.jpg" 
                    alt="" className="home__image"/>

                    <div className="home__row">
                        <Product
                            id="1" 
                            title="Bag"
                            price={11.96}
                            rating={5}
                            image="https://www.harrysarmysurplus.net/assets/images/rothco/8159_BIG.jpg"                            
                        />
                        <Product 
                        id="2" 
                        title="Electronic Note Book"
                        price={15.96}
                        rating={4}
                        image="https://i.pinimg.com/736x/8b/0c/59/8b0c59e4e1f95d3c9483740f3e01dcb7.jpg" />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="3"
                            title="HP laptop"
                            price={700}
                            rating={3}
                            image="https://technofizi.net/wp-content/uploads/2018/04/hp-15-710x420.jpeg"
                        />
                        <Product 
                            id="4"
                            title="Hair dryer"
                            price={400}
                            rating={5}
                            image="https://i5.walmartimages.com/asr/d6272bb8-65e6-498a-8005-34472697b6ec.0263ce692af59864e1e477283ab2a3f8.jpeg"
                        />
                        <Product 
                            id="5"
                            title="SAMSUNG Microwave"
                            price={200}
                            rating={3}
                            image="https://s3.amazonaws.com/zcom-media/sites/a0iE000000P0pdtIAB/media/mediamanager/c529.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="6"
                            title="speakers"
                            price={500}
                            rating={2}
                            image="https://wallpapercave.com/wp/wp4094612.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;