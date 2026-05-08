export type Work = {
  id: number;
  title: string;
  type: string;
  description: string;
  overview: string;
  role: string;
  period: string;
  tags: string[];
  points: string[];
  color?: string;
  images?: {
    pc?: string;
    sp?: string;
  };
  url?: string;
};

export const works: Work[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    type: "Personal",
    description:
      "Figmaでデザインし、React + TypeScript + SCSSで実装した自身のポートフォリオサイト。レスポンシブ対応済み。",
    overview:
      "自身のポートフォリオサイトです。デザインはFigmaで作成し、React + TypeScriptでコンポーネントベースに実装しました。SCSSはFLOCSSアーキテクチャで管理し、保守しやすい設計を意識しました。",
    role: "デザイン・コーディング",
    period: "約1週間",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    points: [
      "FigmaでUIデザインを先行制作し、デザインと実装の一貫性を保持",
      "FLOCSSアーキテクチャによる設計でSCSSを管理",
      "スライダー・ハンバーガーメニューなどのインタラクションをゼロから実装",
      "PC・タブレット・スマートフォンのレスポンシブ対応",
    ],
    color: "linear-gradient(135deg, #1a2968 0%, #243580 100%)",
    url: "",
    images: {
      pc: "/src/assets/img/image_works01_pc.png",
      sp: "/src/assets/img/image_works01_sp.png",
    },
  },
  {
    id: 2,
    title: "ポートフォリオサイト",
    type: "Personal",
    description:
      "Figmaでデザインし、React + TypeScript + SCSSで実装した自身のポートフォリオサイト。レスポンシブ対応済み。",
    overview:
      "自身のポートフォリオサイトです。デザインはFigmaで作成し、React + TypeScriptでコンポーネントベースに実装しました。SCSSはFLOCSSアーキテクチャで管理し、保守しやすい設計を意識しました。",
    role: "デザイン・コーディング",
    period: "約1週間",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    points: [
      "FigmaでUIデザインを先行制作し、デザインと実装の一貫性を保持",
      "FLOCSSアーキテクチャによる設計でSCSSを管理",
      "スライダー・ハンバーガーメニューなどのインタラクションをゼロから実装",
      "PC・タブレット・スマートフォンのレスポンシブ対応",
    ],
    color: "linear-gradient(135deg, #1a2968 0%, #243580 100%)",
    url: "",
    images: {
      pc: "/src/assets/img/image_works01_pc.png",
      sp: "/src/assets/img/image_works01_sp.png",
    },
  },
];

/** トップページに表示する件数 */
export const HOME_WORKS_LIMIT = 2;
