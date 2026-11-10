import Logo from "./Logo";

/** Visual only – no functionality required by the task. Sits on top of the hero image. */
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo light />
          <nav className="header__nav" aria-label="Main">
            <span>Home</span>
            <span>Services</span>
            <span>Case Studies</span>
            <span>Career</span>
            <span>Blog</span>
          </nav>
          <span className="header__cta">Let’s Talk</span>
          <span className="header__burger" aria-hidden="true">
            <i /><i />
          </span>
        </div>
      </div>
    </header>
  );
}
