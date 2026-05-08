import aboutImg from "../assets/img/about.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="p-about">
      <div className="p-about__inner">
        <div className="p-about__content">
          <div className="c-section-label">
            <span className="c-section-label__ja">私について</span>
            <h2 className="c-section-label__en">ABOUT</h2>
          </div>
          <p className="p-about__name">marui</p>
          <p className="p-about__description">
            Webサイト制作のご依頼を承っています。デザインからコーディングまで一貫して対応可能です。
            <br />
            丁寧なヒアリングを心がけ、ご要望をわかりやすく形にします。
          </p>
          <a href="/about" className="c-button c-button--outline">
            Read More
          </a>
          <div>
            <Link to="/about" className="c-button c-button--outline">
              Read More
            </Link>
          </div>
        </div>

        <div className="p-about__image-wrap" aria-hidden="true">
          <div className="p-about__photo">
            <img className="p-about__image" src={aboutImg} alt="marui" />
          </div>
        </div>
      </div>
    </section>
  );
}
