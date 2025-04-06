// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container home-container">
      <section className="row align-items-center py-5 hero-section">
        <div className="col-md-6 text-start">
          <p className="lead text-danger"><strong>Best Juice</strong></p>
          <h1 className="display-4">Drink Your Juice. It's Like Liquid Sunshine For Your Body</h1>
        </div>
        <div className="col-md-6 text-start">
          <p>Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.</p>
          <div className="ratings d-flex align-items-center">
            <span className="badge bg-success me-2">4.5/5</span>
            <span>More than 12,000 customers</span>
          </div>
        </div>
      </section>
      <section className="row">
        <div className="col-md-4 mb-4">
          <div className="card card-sm h-100">
            <img src={`${process.env.PUBLIC_URL}/glass-with-juice.jpg`} className="card-img-top img-fluid" alt="Watermelons" />
            <div className="card-body">

              {/* front side of the card  */}
            <h5 className="card-title">It's like liquid sunshine for your body</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut wisi enim ad minim veniam</li>
                <li>Quis nostrud exerci tation ullamcorper</li>
              </ul>

               {/* Back side of the card */}
            <div class="card__content">
              <h5 className="card-title">It's like liquid sunshine for your body</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut wisi enim ad minim veniam</li>
                <li>Quis nostrud exerci tation ullamcorper</li>
              </ul>
              <a href="https://www.webmd.com/diet/ss/slideshow-health-benefits-of-watermelon" className="btn btn-primary">Explore More</a>
              
               </div>

            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-sm h-100">
            <div className='card-2'>
            <div className="card-body">
              <h5 className="card-title">Fresh Fruit Juices!</h5>
              <ul className="list-unstyled">
                <br></br>
                <li>Rich in vitamins and nutrients.</li>
                <br></br>
                <li>Boosts immune system.</li>
                <br></br>
                <li>Great for hydration and detoxification.</li>
                <br></br>
                <li>Fresh and Healthy.</li>
                <br></br> 
                <li>No added sugar.</li>
                <br></br>
                <li>straight from farm.</li>
              </ul>
                <div class="card__content">
                  <img src={`${process.env.PUBLIC_URL}/woman-eating-watermelon.jpg`} className="card-img" alt="Watermelons"></img>
                  <br></br>
                  <h5 className='incard-text'>Enjoy the freshness in every bite</h5>
                </div>

            </div>
           
          </div> </div> 
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-sm h-100">
            <img src={`${process.env.PUBLIC_URL}/watermelon-fruit.jpg`} className="card-img-top img-fluid" alt="Watermelon Slice" />
            <div className="card-body">

                {/* front side of the card  */}
            <h5 className="card-title">Enjoy the freshness in every bite</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut wisi enim ad minim veniam</li>
                <li>Quis nostrud exerci tation ullamcorper</li>
              </ul>
              
              
              {/* Back side of the card  */}
            <div class="card__content">
              <h5 className="card-title">Enjoy the freshness in every bite</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut wisi enim ad minim veniam</li>
                <li>Quis nostrud exerci tation ullamcorper</li>
              </ul>
              <a href="https://www.nwhealth.edu/news/11-top-watermelon-health-benefits/" className="btn btn-primary">Explore More</a> 
              
              </div>


            </div>
          </div>
        </div>

        
    {/* comment section is for example of card  */}
       
{/* <div class="card">
      <img src="/watermelon-fruit.jpg" className="card-img-top img-fluid" alt="Watermelon Slice" />
  <div class="card__content">
    <p class="card__title">Card Title
    </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div> */}

      </section>
    </div>
  );
};

export default Home;
