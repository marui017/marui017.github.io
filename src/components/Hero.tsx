import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="p-hero">
      <div className="p-hero__bg-text" aria-hidden="true">PORTFOLIO</div>
      <div className="p-hero__bg-ring" aria-hidden="true" />
      <div className="p-hero__inner">
        <div className="p-hero__content">
          <p className="p-hero__subtitle">
            <span className="p-hero__subtitle-bar" />
            Web Designer / Developer
          </p>
          <h1 className="p-hero__heading">
            <span className="p-hero__heading-line1">marui</span>
            <span className="p-hero__heading-line2">portfolio</span>
          </h1>
          <p className="p-hero__description">
            Webサイト制作のご依頼を承っています。<br />
            デザインからコーディングまで一貫してお任せください。
          </p>
          <Link to="/works" className="c-button c-button--primary">Works を見る</Link>
        </div>

        <div className="p-hero__visual">
          <div className="p-hero__circle">
            <div className="p-hero__ring" />
            <div className="p-hero__ring p-hero__ring--sm" />
          </div>
          <div className="p-hero__accent" />
          <div className="p-hero__dot p-hero__dot--1" />
          <div className="p-hero__dot p-hero__dot--2" />
          <div className="p-hero__dot p-hero__dot--3" />
        </div>
      </div>

      <div className="p-hero__scroll">
        <span className="p-hero__scroll-text">scroll</span>
        <div className="p-hero__scroll-line" />
      </div>
    </section>
  )
}
