import "./hero.css";
export const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>category</button>
          </div>
          <div className="shoping">
            <p>Available on </p>
            <div className="brandlogo">
              <img src="./img/flipkart.png" alt="" />
              <img src="./img/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="heroImg">
          <img src="./img/shoe_image.png" alt="" />
        </div>
      </div>
    </main>
  );
};
