import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="logo">
          <span className="logo-mark">✦</span>
          <span>Vidio</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <button className="login-btn">
            Log in
          </button>

          <button className="signup-btn">
            Get Started
            <span>→</span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;