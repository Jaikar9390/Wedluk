import "../styles/Payment.css";
import { ChevronLeft, ChevronRight, Gem } from "lucide-react";
import wedlukLogo from "../assets/wedluk-logo.png";

export default function Payment() {
  return (
    <div className="payment-page">
      {/* TOP HEADER */}
      <div className="top-header">
        <div className="logo-section">
          <div className="logo-img">
            <img src={wedlukLogo} alt="WedLuk Logo" />
          </div>
        </div>

        <div className="profile-setup">
          <p>First Profile setup</p>
          <div className="line"></div>
        </div>
      </div>

      {/* STEPS */}
      <div className="steps">
        <ChevronLeft className="back-icon" size={18} />

        <div className="steps-bar">
          <div className="step active">Profile settings</div>
          <div className="connector"></div>
          <div className="step active">Profile details</div>
          <div className="connector"></div>
          <div className="step active">Match Preferences</div>
          <div className="connector"></div>
          <div className="step current">Payment</div>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="main-wrapper">
        <div className="membership-card">
          <div className="pattern left"></div>
          <div className="pattern right"></div>

          <h1>Agent-Assisted Membership</h1>
          <p className="subtitle">
            Complete your membership to access all WedLuk features.
          </p>

          <div className="divider"></div>

          {/* PRICE CARD */}
          <div className="price-card">
            <div className="price-top">
              <div className="diamond-box">
                <Gem size={32} />
              </div>

              <div className="price-info">
                <p>Annual Membership</p>

                <div className="price-row">
                  <h2>₹ 0/year</h2>
                  <span>₹ 699 /year</span>
                </div>
              </div>
            </div>

            <div className="coupon-row">
              <div className="coupon-left">
                <p>Coupon applied:</p>

                <div className="coupon-tag">
                  EARLY-MEMBER <span>X</span>
                </div>
              </div>

              <button>
                Start Plan <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* FEATURES */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title">
                <Gem size={15} />
                <h3>Smart Matchmaking</h3>
              </div>

              <ul>
                <li>AI-powered compatible matches</li>
                <li>Verified profiles</li>
                <li>Mutual connection insights</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-title">
                {/* <Gem size={15} /> */}
                <h3>Privacy & Control</h3>
              </div>

              <ul>
                <li>Privacy-first profile visibility</li>
                <li>Blurred photos & selective access</li>
                <li>Full control over interactions</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-title">
                <Gem size={15} />
                <h3>Agent-Assisted Matchmaking</h3>
              </div>

              <ul>
                <li>
                  Work with matrimony agents digitally with WedLuk's
                  collaboration tools.
                </li>
                <li>Upgrade to agent-assisted matchmaking anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
