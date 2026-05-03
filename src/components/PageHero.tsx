type Props = {
  label: string
  title: string
}

export default function PageHero({ label, title }: Props) {
  return (
    <div className="p-page-hero">
      {/* 装飾要素 */}
      <div className="p-page-hero__ring"     aria-hidden="true" />
      <div className="p-page-hero__ring--sm" aria-hidden="true" />
      <div className="p-page-hero__accent"   aria-hidden="true" />
      <div className="p-page-hero__dot1"     aria-hidden="true" />
      <div className="p-page-hero__dot2"     aria-hidden="true" />

      <div className="l-inner p-page-hero__inner">
        <p className="p-page-hero__label">
          <span className="p-page-hero__label-bar" />
          {label}
        </p>
        <h1 className="p-page-hero__title">{title}</h1>
      </div>
    </div>
  )
}
