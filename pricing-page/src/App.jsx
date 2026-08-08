import "./App.css";
import Pricing from "./Pricing";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-mark">N</span>
            <span className="logo-text">NOVA</span>
          </a>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <button className="login-btn">Log in</button>
            <button className="header-cta">Get Started</button>
          </div>

          <button className="mobile-menu" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-label">
                <span className="label-dot"></span>
                SIMPLE. POWERFUL. MODERN.
              </div>

              <h1>
                Everything you need.
                <br />
                <span>Nothing you don't.</span>
              </h1>

              <p>
                A simple platform designed to help you create, manage and grow
                your work without unnecessary complexity.
              </p>

              <div className="hero-actions">
                <button className="primary-btn">
                  Get Started
                  <span>→</span>
                </button>

                <button className="secondary-btn">
                  Explore features
                </button>
              </div>

              <div className="hero-note">
                <span>✓</span>
                No credit card required
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="dashboard">
                <div className="dashboard-top">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="dashboard-title">Overview</div>

                  <div className="dashboard-icon">•••</div>
                </div>

                <div className="dashboard-body">
                  <div className="dashboard-heading">
                    <div>
                      <small>Total activity</small>
                      <strong>24,892</strong>
                    </div>

                    <div className="growth">+18.4%</div>
                  </div>

                  <div className="chart">
                    <div className="chart-line"></div>

                    <div className="chart-points">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>

                  <div className="stats-row">
                    <div className="mini-stat">
                      <span>Projects</span>
                      <strong>48</strong>
                    </div>

                    <div className="mini-stat">
                      <span>Members</span>
                      <strong>126</strong>
                    </div>

                    <div className="mini-stat">
                      <span>Tasks</span>
                      <strong>892</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span className="floating-icon">✓</span>
                <div>
                  <small>Completed</small>
                  <strong>86%</strong>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <div className="avatar-stack">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                </div>
                <div>
                  <small>Active team</small>
                  <strong>12 members</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted">
          <p>TRUSTED BY TEAMS THAT VALUE SIMPLICITY</p>

          <div className="trusted-logos">
            <span>ACME</span>
            <span>MONO</span>
            <span>FRAME</span>
            <span>VERTEX</span>
            <span>LINEAR</span>
          </div>
        </section>

        <Pricing />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo-mark">N</span>
            <span>NOVA</span>
          </div>

          <p>© 2026 Nova. All rights reserved.</p>

          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;