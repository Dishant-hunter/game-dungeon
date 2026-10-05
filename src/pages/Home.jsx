import { Link } from "react-router-dom";
import {
  Cpu,
  Gamepad2,
  Zap,
  ArrowRight,
  Shield,
  Rocket
} from "lucide-react";

function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <div className="system-status">
            <span></span>
            SYSTEM ONLINE
          </div>

          <h1>
            ENTER THE
            <span> GAME DUNGEON</span>
          </h1>

          <p>
            A new dimension for gamers. Discover legendary titles,
            elite PC hardware, and futuristic gaming technology.
          </p>

          <div className="hero-buttons">
            <Link to="/store" className="primary-btn">
              EXPLORE STORE
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="secondary-btn">
              DISCOVER MORE
            </Link>
          </div>

          <div className="hero-stats">

            <div>
              <strong>10K+</strong>
              <span>GAMERS</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>PRODUCTS</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>ONLINE</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>

          <div className="gaming-core">
            <div className="core-ring ring-1"></div>
            <div className="core-ring ring-2"></div>
            <div className="core-ring ring-3"></div>

            <Gamepad2 size={100} />
          </div>

        </div>

      </section>


      {/* FEATURE CARDS */}

      <section className="features container">

        <div className="section-heading">
          <span>/// SELECT YOUR LOADOUT</span>
          <h2>CHOOSE YOUR PATH</h2>
        </div>

        <div className="feature-grid">

          <Link to="/store" className="feature-card">
            <div className="feature-icon">
              <Gamepad2 size={38} />
            </div>

            <h3>GAMES</h3>

            <p>
              Explore blockbuster adventures, tactical shooters,
              RPGs and legendary classics.
            </p>

            <span>
              ENTER LIBRARY <ArrowRight size={16} />
            </span>
          </Link>


          <Link to="/store" className="feature-card">
            <div className="feature-icon">
              <Cpu size={38} />
            </div>

            <h3>PC HARDWARE</h3>

            <p>
              Upgrade your rig with high-performance GPUs,
              processors and gaming gear.
            </p>

            <span>
              UPGRADE RIG <ArrowRight size={16} />
            </span>
          </Link>


          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={38} />
            </div>

            <h3>INSTANT POWER</h3>

            <p>
              Fast digital delivery and premium gaming
              equipment ready for your setup.
            </p>

            <span>
              BOOST PERFORMANCE <ArrowRight size={16} />
            </span>
          </div>

        </div>

      </section>


      {/* PROMO */}

      <section className="promo container">

        <div className="promo-content">

          <span className="promo-label">
            <Rocket size={16} />
            NEXT GENERATION GAMING
          </span>

          <h2>
            BUILD THE MACHINE
            <span> OF THE FUTURE.</span>
          </h2>

          <p>
            From high-end GPUs to mechanical keyboards,
            Game Dungeon gives you everything required
            to dominate the digital battlefield.
          </p>

          <Link to="/store" className="primary-btn">
            VIEW HARDWARE
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="promo-chip">
          <Cpu size={100} />
        </div>

      </section>


      {/* TRUST */}

      <section className="trust container">

        <div className="trust-item">
          <Shield />
          <div>
            <h4>SECURE PAYMENTS</h4>
            <p>Encrypted transactions.</p>
          </div>
        </div>

        <div className="trust-item">
          <Zap />
          <div>
            <h4>FAST DELIVERY</h4>
            <p>Digital products instantly.</p>
          </div>
        </div>

        <div className="trust-item">
          <Gamepad2 />
          <div>
            <h4>GAMER VERIFIED</h4>
            <p>Built for real gamers.</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;