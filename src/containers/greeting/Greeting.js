import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ParticleBackground from "../../components/particleBackground/ParticleBackground";
import {useTypewriter} from "../../hooks/useTypewriter";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const typedRole = useTypewriter(greeting.roles);

  if (!greeting.displayGreeting) {
    return null;
  }

  // Render the name inside the title with a gradient accent
  const name = greeting.username;
  const hasName =
    typeof greeting.title === "string" && greeting.title.includes(name);
  const titlePrefix = hasName
    ? greeting.title.slice(0, greeting.title.indexOf(name))
    : greeting.title;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <ParticleBackground isDark={isDark} />
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {greeting.badge && (
                <div className={isDark ? "hero-badge hero-badge-dark" : "hero-badge"}>
                  <span className="hero-badge-dot" />
                  {greeting.badge}
                </div>
              )}
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {titlePrefix}
                {hasName && <span className="gradient-text">{name}</span>}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              {greeting.roles && greeting.roles.length > 0 && (
                <h2 className="greeting-roles">
                  <span className="typed-role gradient-text">{typedRole}</span>
                  <span className="typed-cursor" aria-hidden="true">
                    |
                  </span>
                </h2>
              )}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a href={greeting.resumeLink} className="download-link-button">
                    <Button text="Checkout my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="hero-portrait">
              <img
                alt={name}
                className="hero-portrait-img"
                src={require("../../assets/images/rakesh.jpg")}
              />
              {(greeting.floatingChips || []).map((chip, i) => (
                <span
                  key={i}
                  className={`hero-chip hero-chip-${(i % 4) + 1} ${
                    isDark ? "hero-chip-dark" : ""
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
