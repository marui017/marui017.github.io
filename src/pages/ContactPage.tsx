import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",

      body: data,

      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSent(true);

      form.reset();
    } else {
      alert("送信に失敗しました");
    }
  };

  return (
    <>
      <PageHero label="お問い合わせ" title="CONTACT" />

      <section className="p-contact-page">
        <div className="l-inner">
          {sent ? (
            <div className="p-contact-page__thanks">
              <p>
                お問い合わせありがとうございます。
                <br />
                内容を確認のうえ、ご連絡いたします。
              </p>
              <div className="p-contact__btn-wrap">
                <Link to="/" className="c-button c-button--outline">
                  トップへ戻る
                </Link>
              </div>
            </div>
          ) : (
            <form
              className="p-contact-page__form"
              onSubmit={handleSubmit}
              noValidate
              action="https://formspree.io/f/xjgledwq"
            >
              <p className="p-contact-page__lead">
                Webサイト制作・バナー制作・コーディングのご依頼やご相談は、
                <br className="sp-hide" />
                下記フォームからお気軽にどうぞ。
                <br />
                内容を確認のうえ、3営業日以内にご返信いたします。
              </p>
              <div className="p-contact-page__group">
                <label className="p-contact-page__label" htmlFor="name">
                  お名前 <span className="p-contact-page__required">必須</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="p-contact-page__input"
                  placeholder="山田 太郎"
                  required
                />
              </div>

              <div className="p-contact-page__group">
                <label className="p-contact-page__label" htmlFor="email">
                  メールアドレス{" "}
                  <span className="p-contact-page__required">必須</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="p-contact-page__input"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="p-contact-page__group">
                <label className="p-contact-page__label" htmlFor="type">
                  お問い合わせ種別
                </label>
                <select
                  id="type"
                  className="p-contact-page__select"
                  name="type"
                >
                  <option value="">選択してください</option>
                  <option value="website">Webサイト制作</option>
                  <option value="banner">バナー・画像制作</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="p-contact-page__group">
                <label className="p-contact-page__label" htmlFor="message">
                  お問い合わせ内容{" "}
                  <span className="p-contact-page__required">必須</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="p-contact-page__textarea"
                  rows={6}
                  placeholder="ご相談内容をご記入ください"
                  required
                />
              </div>

              <div className="p-contact-page__submit">
                <button type="submit" className="c-button c-button--primary">
                  送信する
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
