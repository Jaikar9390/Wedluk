import React, { useState } from "react";
import "../styles/termsPage.css";
import wedlukLogo from "../assets/wedluk-logo.png";

const TermsPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="terms-wrapper">
      {/* TOP NAVBAR */}
      <div className="topbar">
        <div className="logo-section">
          <span className="back-arrow">&#8249;</span>

          <div className="logo">
            <div className="logo-img">
              <img src={wedlukLogo} alt="WedLuk Logo" />
            </div>

            
          </div>
        </div>

        <div className="top-link">Terms & conditions</div>
      </div>

      {/* MAIN CARD */}
      <div className="terms-card">
        <h2>Terms of Service</h2>

        <p className="terms-card-subtitle">
          Please review the following terms carefully before continuing with
          account creation.
        </p>

        {/* TERMS BOX */}
        <div className="terms-box">
          <ol>
            <li>
              By creating an account, you confirm that all information provided
              by you is accurate, complete, and up to date to the best of your
              knowledge.
            </li>

            <li>
              Users are solely responsible for the content, photographs, and
              personal information shared through their profiles and
              interactions on the platform.
            </li>

            <li>
              WedLuk reserves the right to suspend, restrict, or permanently
              remove accounts found to contain false, misleading, abusive,
              fraudulent, or inappropriate content.
            </li>

            <li>
              Users agree to use the platform only for lawful matrimonial and
              matchmaking purposes and shall not engage in harassment,
              impersonation, spam, or misuse of platform services.
            </li>

            <li>
              WedLuk may provide profile recommendations, matchmaking
              assistance, verification services, and agent-assisted support;
              however, compatibility and marriage outcomes are not guaranteed.
            </li>

            <li>
              Membership plans, platform features, and pricing may be modified,
              updated, restricted, or discontinued at the sole discretion of
              WedLuk without prior notice.
            </li>

            <li>
              Users are responsible for maintaining the confidentiality of
              account credentials and all activities performed under their
              account.
            </li>

            <li>
              WedLuk may collect, process, and store user information in
              accordance with its Privacy Policy for the purpose of providing
              matchmaking and platform-related services.
            </li>

            <li>
              Matrimony agents and affiliated representatives using the platform
              are expected to comply with applicable platform policies,
              professional conduct standards, and user privacy obligations.
            </li>

            <li>
              WedLuk shall not be held liable for user interactions, offline
              meetings, disputes, decisions, or outcomes arising from
              connections established through the platform.
            </li>
          </ol>
        </div>

        {/* BOTTOM */}
        <div className="bottom-row">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />

            <p>
              I have read and agree to the Terms of Service and Privacy Policy.
            </p>
          </label>

          <button className="accept-btn">Accept & continue ❯</button>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
