function Footer() {
  return (
    <footer className="footer">

      <div className="footer-column brand">
        <h2>Funiro.</h2>

        <p>
          400 University Drive Suite 200
          <br />
          Coral Gables, FL 33134 USA
        </p>
      </div>

      <div className="footer-column">
        <h4>Links</h4>

        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-column">
        <h4>Help</h4>

        <a href="#">Payment Options</a>
        <a href="#">Returns</a>
        <a href="#">Privacy Policies</a>
      </div>

      <div className="footer-column newsletter">
        <h4>Newsletter</h4>

        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter Your Email Address"
          />

          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026 Funiro. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;