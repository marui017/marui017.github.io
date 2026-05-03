export type Work = {
  id: number
  title: string
  type: string
  description: string
  overview: string
  role: string
  period: string
  tags: string[]
  points: string[]
  color?: string
  images?: {
    pc?: string
    sp?: string
  }
  url?: string
}

export const works: Work[] = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    type: 'Personal',
    description: 'Figmaでデザインし、React + TypeScript + SCSSで実装した自身のポートフォリオサイト。レスポンシブ対応済み。',
    overview:
      '受注活動のために制作した自身のポートフォリオサイトです。デザインはFigmaで作成し、React + TypeScriptでコンポーネントベースに実装しました。SCSSはFLOCSSアーキテクチャで管理し、保守しやすい設計を意識しました。',
    role: 'デザイン・コーディング',
    period: '約1ヶ月',
    tags: ['React', 'TypeScript', 'SCSS', 'Figma'],
    points: [
      'FigmaでUIデザインを先行制作し、デザインと実装の一貫性を保持',
      'FLOCSSアーキテクチャによる設計でSCSSを管理',
      'スライダー・ハンバーガーメニューなどのインタラクションをゼロから実装',
      'PC・タブレット・スマートフォンのレスポンシブ対応',
    ],
    color: 'linear-gradient(135deg, #1a2968 0%, #243580 100%)',
    url: '',
  },
  {
    id: 2,
    title: '飲食店サイト（架空）',
    type: 'Website',
    description: '架空の飲食店を想定した練習制作サイト。メニューページや予約フォームを含むマルチページ構成。',
    overview:
      'コーディング練習として制作した架空の飲食店サイトです。実際の受注を想定し、メニュー・アクセス・予約フォームを含むマルチページ構成で制作しました。',
    role: 'デザイン・コーディング',
    period: '約2週間',
    tags: ['HTML', 'CSS', 'JavaScript', 'デザイン'],
    points: [
      '飲食店らしい温かみのあるビジュアルデザイン',
      'JavaScriptによるハンバーガーメニューの実装',
      'お問い合わせフォームのバリデーション実装',
      'レスポンシブ対応',
    ],
  },
]

/** トップページに表示する件数 */
export const HOME_WORKS_LIMIT = 2
