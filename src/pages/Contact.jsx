import { Mail, MessageSquare, Send } from "lucide-react";

function Contact() {
  return (
    <section className="contact-page container">

      <div className="page-header">

        <span>/// ESTABLISH CONNECTION</span>

        <h1>
          CONTACT <span>COMMAND.</span>
        </h1>

        <p>
          Need support? Want to collaborate?
          Send a transmission.
        </p>

      </div>


      <div className="contact-grid">

        <div className="contact-info">

          <div className="contact-box">

            <Mail />

            <div>
              <h3>EMAIL</h3>
              <p>support@gamedungeon.com</p>
            </div>

          </div>


          <div className="contact-box">

            <MessageSquare />

            <div>
              <h3>SUPPORT</h3>
              <p>24/7 Gamer Assistance</p>
            </div>

          </div>


          <div className="contact-system">

            <span className="pulse"></span>

            NETWORK STATUS

            <strong>ONLINE</strong>

          </div>

        </div>


        <form className="contact-form">

          <input
            type="text"
            placeholder="PLAYER NAME"
          />

          <input
            type="email"
            placeholder="EMAIL ADDRESS"
          />

          <textarea
            rows="6"
            placeholder="YOUR TRANSMISSION..."
          ></textarea>

          <button type="submit" className="primary-btn">
            SEND MESSAGE
            <Send size={18} />
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;