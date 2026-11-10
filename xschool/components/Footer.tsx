import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__card">
          <div className="footer__top">
            <div className="footer__cols">
              <div>
                <p className="footer__head">Sitemap</p>
                <span>Home</span><span>Services</span><span>Case Studies</span>
                <span>About</span><span>Career</span><span>Blog</span><span>Contact</span>
              </div>
              <div>
                <p className="footer__head">Follow Us On</p>
                <span>Instagram</span><span>LinkedIn</span><span>YouTube</span>
              </div>
              <div>
                <p className="footer__head">Office</p>
                <span>Baku, Azerbaijan</span>
              </div>
              <div>
                <p className="footer__head">For Partnerships</p>
                <span>hello@wemark.pro</span>
              </div>
            </div>
            <span className="footer__up" aria-hidden="true">↑</span>
          </div>
          <div className="footer__word" aria-hidden="true"><Logo light /></div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Wemark. All rights reserved.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
