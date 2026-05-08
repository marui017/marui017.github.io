import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="p-contact">
      <div className="p-contact__wave" aria-hidden="true" />
      <div className="p-contact__body">
        <div className="p-contact__inner">
          <div className="c-section-label c-section-label--center c-section-label--light">
            <span className="c-section-label__ja">お問い合わせ</span>
            <h2 className="c-section-label__en">CONTACT</h2>
          </div>
          <p className="p-contact__description">
            Webサイト制作・バナー制作・コーディングのご依頼は
            <br />
            お気軽にお問い合わせください。まずはご相談から。
          </p>
          <div>
            <Link to="/contact" className="c-button c-button--contact">
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
