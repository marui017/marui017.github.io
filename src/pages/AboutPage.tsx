import PageHero from '../components/PageHero'

const skillGroups = [
  {
    category: 'Webデザイン',
    description: 'ワイヤーフレームの作成からビジュアルデザインまで対応。見やすく伝わるデザインを提案します。',
    tools: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
  },
  {
    category: 'Web制作・コーディング',
    description: 'デザインを忠実にコーディング。スマートフォン対応（レスポンシブ）も標準で対応します。',
    tools: ['HTML', 'CSS / SCSS', 'JavaScript', 'TypeScript', 'React', 'Git', 'Netlify'],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero label="私について" title="ABOUT" />

      <section className="p-about-page">
        <div className="l-inner">

          {/* Profile */}
          <div className="p-about-page__profile">
            <div className="p-about-page__photo-wrap" aria-hidden="true">
              <div className="p-about-page__photo" />
            </div>
            <div className="p-about-page__bio">
              <h2 className="p-about-page__name">marui</h2>
              <p className="p-about-page__role">Web Designer / Developer</p>
              <p className="p-about-page__text">
                Webサイト制作のご依頼を承っています。デザインからコーディングまで
                一貫して対応できるのが強みです。<br /><br />
                「思いをわかりやすく美に」をモットーに、ご要望を丁寧にヒアリングしながら
                見やすく・使いやすいWebサイトを制作します。<br /><br />
                デザインツールはFigmaを主に使用。コーディングはHTML / CSS / JavaScript、
                ReactやTypeScriptにも対応しています。
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="p-about-page__skills">
            <h2 className="p-about-page__skills-title">できること</h2>
            <div className="p-about-page__skill-grid">
              {skillGroups.map((group) => (
                <div key={group.category} className="p-about-page__skill-card">
                  <h3 className="p-about-page__skill-category">{group.category}</h3>
                  <p className="p-about-page__skill-desc">{group.description}</p>
                  <ul className="p-about-page__skill-tags">
                    {group.tools.map((tool) => (
                      <li key={tool} className="p-about-page__skill-tag">{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
