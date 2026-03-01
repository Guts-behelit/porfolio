import './globals.css';


export  function Home() {
  return (
    <div className="ampera-page">
      {/* Services Bar */}
      <div className="services-bar">
        <a href="#warehousing">Warehousing</a>
        <a href="#fulfillment">Fulfillmen</a>
        <a href="#fba">FBA Transfer</a>
        <a href="#return">Return</a>
        <a href="#relabel">Relabel</a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">JOSHUA</div>
        <div className="navbar-links">
          <div>
            <span className="navbar-label">Simple</span>
            <a href="#simple">250 Cover Sort City to Shipping</a>
          </div>
          <div>
            <span className="navbar-label">Speedy</span>
            <a href="#speedy">Swift Shipping Scaled Solutions</a>
          </div>
          <div>
            <span className="navbar-label">Scalable</span>
            <a href="#scalable">Under Introduction Limits</a>
          </div>
          <button className="navbar-cta">Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <img src={'/assets/hero-ship.jpg'} alt="Cargo ship at port" />
          <div className="hero-overlay">
            <span className="hero-label">developer</span>
            <h1 className="hero-title-main">JOSHUA</h1>
            <span className="hero-title-script">FrontEnd</span>
            <span className="hero-bottom-label">Logistics</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-top">
            <img src={'/assets/services-containers.jpg'} alt="Container terminal" />
            <div className="hero-right-top-overlay">
              <span className="hero-allinone-label">All-in-one</span>
              <h2 className="hero-services-title">PROYECTS</h2>
            </div>
            <span className="hero-right-top-tag">Ocean Freight & Air Freight</span>
          </div>

          <div className="hero-right-bottom">
            <p>
              A has four warehouses strategically located across the United States east coast, south and west coast. Our
              integrations provide simple, speedy, and scalable solutions for all our customers with warehouse storage
              capabilities and optimized fulfillment services. Just leave your fulfillment to us.
            </p>
          </div>
        </div>
      </section>

      {/* Ship Globally Section */}
      <section className="ship-section">
        <div className="ship-left">
          <div className="ship-left-top">
            <p>
              We can handle your cargo from and to wherever you need, by land, air and sea.
            </p>
          </div>
          <div>
            <h2 className="ship-title">
              SHIP<br />GLOBALLY
            </h2>
            <p className="ship-subtitle">
              Take control of your shipping today
            </p>
          </div>
        </div>
        <div className="ship-right">
          <img src={'/assets/ship-global.jpg'} alt="Cargo ship at sea" />
          <div className="ship-right-overlay" />
        </div>
      </section>

      {/* Cost-Efficient Section */}
      <section className="cost-section">
        <div className="cost-left">
          <img src={'/assets/air-freight.jpg'} alt="Air freight loading" />
          <div className="cost-left-overlay" />
        </div>
        <div className="cost-right">
          <span className="cost-label">Find the right route for your goods with guaranteed cost savings</span>
          <h2 className="cost-title">
            Enjoy Cost-Efficient<br />
            Transportation For<br />
            Your Goods
          </h2>
          <span className="cost-tag">Ocean Freight & Air Freight</span>
        </div>
      </section>

      {/* Bottom Services */}
      <div className="bottom-services">
        <span>Services</span>
      </div>
    </div>
  );
}

export default function Home2(){
  return(
    <div className="ampera-page">

    </div>
  )
}