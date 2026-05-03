const services = [
  {
    id: 1,
    title: 'デザイン',
    description: '見やすく、使い心地よいWebサイトを設計・デザインします。',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="22" rx="2" stroke="white" strokeWidth="2" />
        <path d="M4 14h32" stroke="white" strokeWidth="2" />
        <circle cx="8" cy="11" r="1.5" fill="white" />
        <circle cx="13" cy="11" r="1.5" fill="white" />
        <path d="M12 22l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 34h24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'コーディング',
    description: 'HTML/CSS/JavaScriptでの実装に加え、React・TypeScriptにも対応です。',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 13l-8 7 8 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 13l8 7-8 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10l-4 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '運用・改善',
    description: '既存サイトの分析や問題点の改善、運用のサポートも対応できます。',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="22" rx="2" stroke="white" strokeWidth="2" />
        <path d="M14 30v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 30v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 34h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 24h32" stroke="white" strokeWidth="2" />
        <path d="M13 17h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 20h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Service() {
  return (
    <section id="service" className="p-service">
      <div className="p-service__bg-ring"  aria-hidden="true" />
      <div className="p-service__bg-ring p-service__bg-ring--sm" aria-hidden="true" />
      <div className="p-service__bg-dots" aria-hidden="true" />

      <div className="l-inner">
        <div className="c-section-label c-section-label--center c-section-label--light">
          <span className="c-section-label__ja">お手伝いできること</span>
          <h2 className="c-section-label__en">SERVICE</h2>
        </div>

        <ul className="p-service__list">
          {services.map((s) => (
            <li key={s.id} className="p-service__item">
              <div className="p-service__icon">{s.icon}</div>
              <div className="p-service__body">
                <h3 className="p-service__title">{s.title}</h3>
                <p className="p-service__desc">{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
