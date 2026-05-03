import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { works, type Work } from '../data/works'

function WorkCard({ work }: { work: Work }) {
  return (
    <>
      <div
        className="c-card__thumbnail"
        style={work.color ? { background: work.color } : undefined}
        aria-hidden="true"
      />
      <div className="c-card__body">
        <span className="c-card__type">{work.type}</span>
        <h3 className="c-card__title">{work.title}</h3>
        <p className="c-card__desc">{work.description}</p>
        <ul className="c-card__tags">
          {work.tags.map((tag) => (
            <li key={tag} className="c-card__tag">{tag}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

function useSlidesPerView() {
  const [spv, setSpv] = useState(() => (window.innerWidth < 768 ? 1 : 2))
  useEffect(() => {
    const update = () => setSpv(window.innerWidth < 768 ? 1 : 2)
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])
  return spv
}

const MAX_SLIDES_PER_VIEW = 2

export default function Works() {
  const slidesPerView = useSlidesPerView()
  const [currentIndex, setCurrentIndex] = useState(0)

  const isSlider = works.length > MAX_SLIDES_PER_VIEW
  const maxIndex = works.length - slidesPerView

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, Math.max(0, works.length - slidesPerView)))
  }, [slidesPerView])

  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0))
  const next = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex))

  const trackWidth = `${(works.length / slidesPerView) * 100}%`
  const cardWidth  = `${100 / works.length}%`
  const offset     = `${-(currentIndex * (100 / works.length))}%`

  return (
    <section id="works" className="p-works">
      <div className="l-inner">
        <div className="c-section-label c-section-label--center">
          <span className="c-section-label__ja">制作実績</span>
          <h2 className="c-section-label__en">WORKS</h2>
        </div>

        {isSlider ? (
          <>
            <div className="p-works__slider">
              <button className="p-works__arrow" onClick={prev} disabled={currentIndex === 0} aria-label="前へ">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="p-works__viewport">
                <div className="p-works__track" style={{ width: trackWidth, transform: `translateX(${offset})` }}>
                  {works.map((work) => (
                    <div key={work.id} className="p-works__slide" style={{ width: cardWidth }}>
                      <Link to={`/works/${work.id}`} className="c-card c-card--link"><WorkCard work={work} /></Link>
                    </div>
                  ))}
                </div>
              </div>

              <button className="p-works__arrow" onClick={next} disabled={currentIndex === maxIndex} aria-label="次へ">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="p-works__dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`p-works__dot${i === currentIndex ? ' is-active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`${i + 1}枚目へ`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="p-works__grid">
            {works.map((work) => (
              <Link key={work.id} to={`/works/${work.id}`} className="c-card c-card--link">
                <WorkCard work={work} />
              </Link>
            ))}
          </div>
        )}

        <div className="p-works__btn-wrap">
          <Link to="/works" className="c-button c-button--outline">制作実績一覧</Link>
        </div>
      </div>
    </section>
  )
}
