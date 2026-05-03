import { Link } from 'react-router-dom'
import { works } from '../data/works'
import PageHero from '../components/PageHero'

export default function WorksPage() {
  return (
    <>
      <PageHero label="制作実績" title="WORKS" />

      <section className="p-works-page">
        <div className="l-inner">
          <div className="p-works-page__grid">
            {works.map((work) => (
              <Link key={work.id} to={`/works/${work.id}`} className="c-card c-card--link">
                <div
                  className="c-card__thumbnail"
                  style={work.color ? { background: work.color } : undefined}
                  aria-hidden="true"
                />
                <div className="c-card__body">
                  <span className="c-card__type">{work.type}</span>
                  <h2 className="c-card__title">{work.title}</h2>
                  <p className="c-card__desc">{work.description}</p>
                  <ul className="c-card__tags">
                    {work.tags.map((tag) => (
                      <li key={tag} className="c-card__tag">{tag}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
