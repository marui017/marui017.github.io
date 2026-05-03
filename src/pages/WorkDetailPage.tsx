import { useParams, Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { works } from '../data/works'

export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>()
  const work = works.find((w) => w.id === Number(id))

  if (!work) return <Navigate to="/works" replace />

  return (
    <>
      <PageHero label="制作実績" title={work.title} />

      <section className="p-work-detail">

        {/* デバイスモックアップ（全幅エリア） */}
        <div className="p-work-detail__stage" aria-hidden="true">
          <div className="p-work-detail__mockups">
            {/* PC */}
            <div className="p-work-detail__device p-work-detail__device--pc">
              <div className="p-work-detail__device-chrome">
                <span /><span /><span />
              </div>
              <div
                className="p-work-detail__device-screen"
                style={
                  work.images?.pc
                    ? { backgroundImage: `url(${work.images.pc})` }
                    : work.color
                    ? { background: work.color }
                    : undefined
                }
              />
            </div>
            {/* SP */}
            <div className="p-work-detail__device p-work-detail__device--sp">
              <div className="p-work-detail__device-notch" />
              <div
                className="p-work-detail__device-screen"
                style={
                  work.images?.sp
                    ? { backgroundImage: `url(${work.images.sp})` }
                    : work.color
                    ? { background: work.color }
                    : undefined
                }
              />
              <div className="p-work-detail__device-home" />
            </div>
          </div>
        </div>

        <div className="l-inner">

          {/* メタ情報 */}
          <ul className="p-work-detail__meta">
            <li className="p-work-detail__meta-item">
              <span className="p-work-detail__meta-label">カテゴリ</span>
              <span className="p-work-detail__meta-value">{work.type}</span>
            </li>
            <li className="p-work-detail__meta-item">
              <span className="p-work-detail__meta-label">担当</span>
              <span className="p-work-detail__meta-value">{work.role}</span>
            </li>
            <li className="p-work-detail__meta-item">
              <span className="p-work-detail__meta-label">制作期間</span>
              <span className="p-work-detail__meta-value">{work.period}</span>
            </li>
          </ul>

          <div className="p-work-detail__body">
            {/* 概要 */}
            <div className="p-work-detail__section">
              <h2 className="p-work-detail__section-title">概要</h2>
              <p className="p-work-detail__overview">{work.overview}</p>
            </div>

            {/* こだわりポイント */}
            <div className="p-work-detail__section">
              <h2 className="p-work-detail__section-title">制作のポイント</h2>
              <ul className="p-work-detail__points">
                {work.points.map((point, i) => (
                  <li key={i} className="p-work-detail__point">{point}</li>
                ))}
              </ul>
            </div>

            {/* 使用技術 */}
            <div className="p-work-detail__section">
              <h2 className="p-work-detail__section-title">使用技術</h2>
              <ul className="p-work-detail__tags">
                {work.tags.map((tag) => (
                  <li key={tag} className="p-work-detail__tag">{tag}</li>
                ))}
              </ul>
            </div>

            {/* 外部リンク */}
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="c-button c-button--primary p-work-detail__link"
              >
                サイトを見る
              </a>
            )}
          </div>

          {/* 戻るボタン */}
          <div className="p-work-detail__back">
            <Link to="/works" className="c-button c-button--outline">一覧に戻る</Link>
          </div>

        </div>
      </section>
    </>
  )
}
