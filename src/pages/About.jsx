import { Crosshair, Cpu, Gamepad2 } from "lucide-react";

function About() {
  return (
    <section className="about-page container">

      <div className="page-header">

        <span>/// ORIGIN STORY</span>

        <h1>
          WELCOME TO THE
          <span> DUNGEON.</span>
        </h1>

      </div>


      <div className="about-grid">

        <div className="about-main">

          <h2>
            NOT JUST A STORE.
            <br />
            <span>A GAMER'S BASE.</span>
          </h2>

          <p>
            Game Dungeon was built for players who see gaming
            as more than entertainment.
          </p>

          <p>
            From cinematic adventures to competitive battlefields,
            from powerful GPUs to complete gaming setups —
            we bring the arsenal together in one place.
          </p>

          <p>
            Our mission is simple:
            <strong> power players with better gear and better games.</strong>
          </p>

        </div>


        <div className="about-terminal">

          <div className="terminal-header">
            SYSTEM_LOG.exe
          </div>

          <p>
            &gt; INITIALIZING GAME DUNGEON...
          </p>

          <p>
            &gt; LOADING GAMING DATABASE...
          </p>

          <p>
            &gt; CONNECTING HARDWARE NETWORK...
          </p>

          <p className="terminal-success">
            &gt; STATUS: READY
          </p>

        </div>

      </div>


      <div className="mission-grid">

        <div>
          <Crosshair />
          <h3>PRECISION</h3>
          <p>
            Carefully selected gaming products.
          </p>
        </div>

        <div>
          <Cpu />
          <h3>PERFORMANCE</h3>
          <p>
            Hardware built for maximum power.
          </p>
        </div>

        <div>
          <Gamepad2 />
          <h3>PASSION</h3>
          <p>
            Built by gamers, for gamers.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;