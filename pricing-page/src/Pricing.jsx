import { useState } from "react";
import "./Pricing.css";

const plans = [
  {
    type: "basic",
    title: "BASIC",
    price: "Free",
    subtitle: "Trial",
    features: [
      "Free courses",
      "5 Premium Videos",
      "Notify me, Favorite",
    ],
    button: "Sign Up",
  },
  {
    type: "pro",
    title: "PRO AT 50%",
    price: "$5",
    subtitle: "per month, billed annually",
    features: [
      "All courses and videos",
      "Source files, ePub",
      "Certificates, Tests",
      "Premium tutorials",
      "UI, icons, illustrations",
      "Commercial use",
    ],
    button: "Subscribe",
  },
  {
    type: "team",
    title: "TEAM",
    price: "$15",
    subtitle: "per member, per month, billed annually",
    features: [
      "5 users",
      "Manage subscriptions",
      "Team progress",
    ],
    button: "Subscribe",
  },
];

function Pricing() {
  const [billing, setBilling] = useState("annual");

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-top">
        <p className="pricing-intro">
          Get access to all our premium courses, tutorials, downloads,
          <br />
          certificates and priority support.
        </p>

        <div className="billing">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "annual" ? "active" : ""}
            onClick={() => setBilling("annual")}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="book-area">
        <div className="pricing-book">
          {plans.map((plan, index) => (
            <div
              key={plan.type}
              className={`pricing-page pricing-page-${index + 1} ${plan.type}`}
            >
              {/* BACK / BOOK COVER */}
              <div className="book-cover">
                <div className="cover-shine"></div>
              </div>

              {/* FRONT PAGE */}
              <div className="page-face">
                <div className="page-inner">
                  <div className="plan-title">{plan.title}</div>

                  <h3>{plan.price}</h3>

                  <div className="plan-subtitle">{plan.subtitle}</div>

                  <div className="plan-features">
                    {plan.features.map((feature) => (
                      <div className="plan-feature" key={feature}>
                        <span className="check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="plan-button">
                    <span className="button-icon">
                      {plan.type === "basic" ? "↗" : "▤"}
                    </span>

                    <span>{plan.button}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-bottom">
        <p>
          Save 47% on an annual plan. We support
          <br />
          PayPal for an individual annual plan only.
          <br />
          Any question? <span>contact us</span>
        </p>

        <div className="pricing-divider"></div>

        <strong>OR, PAY WITH PAYPAL</strong>
      </div>
    </section>
  );
}

export default Pricing;