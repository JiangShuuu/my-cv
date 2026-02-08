export interface Experience {
	id: string;
	title: string;
	company: string;
	companyUrl: string;
	location: string;
	period: string;
	techStack: string;
	highlights: string[];
	fullDescription: string;
	screenshots: string[];
}

export const experiences: Experience[] = [
	{
		id: "trans-iot",
		title: "Sr. Frontend Engineer",
		company: "創星物聯科技有限公司",
		companyUrl: "https://www.trans-iot.com/tw/about/",
		location: "Remote / Taipei",
		period: "2024/02 - Present",
		techStack:
			"TypeScript, Vue(Nuxt.js), React(Next.js), Python, PostgreSQL, GraphQL, GCP",
		highlights: [
			"主導遠端前端開發，使用 Nuxt/Next 框架",
			"透過 AI 輔助提供 Python/FastAPI 後端支援",
			"負責四個核心平台的跨部門協調",
			"透過 GitHub PR 審查推動程式碼品質改善",
		],
		fullDescription: `擔任 Sr. Frontend Engineer，主導遠端前端開發工作。

主要職責：
- 使用 Nuxt/Next 框架進行前端開發
- 透過 AI 輔助提供 Python/FastAPI 後端支援
- 負責四個核心平台的跨部門協調
- 透過 GitHub PR 審查推動程式碼品質改善

技術環境：
- 前端：Vue (Nuxt)、React (Next.js)、TypeScript
- 後端：Python、FastAPI
- 資料庫：PostgreSQL
- 雲端：GCP`,
		screenshots: [
			"/experiences/trans-iot/01.png",
			"/experiences/trans-iot/02.png",
			"/experiences/trans-iot/03.png",
			"/experiences/trans-iot/04.png",
			"/experiences/trans-iot/05.png",
		],
	},
	{
		id: "104-corporation",
		title: "Frontend Engineer",
		company: "104人力銀行",
		companyUrl: "https://www.104.com.tw/",
		location: "Taipei",
		period: "2023/05 - 2024/02",
		techStack: "TypeScript, Vue(Nuxt.js), Redis, AWS",
		highlights: [
			"使用 Nuxt (Vue) 框架執行 Scrum 開發流程",
			"主導 SSO 身份驗證整合與 PoC 專案",
			"將樣式從 SCSS 遷移至 Tailwind CSS",
		],
		fullDescription: `擔任 Frontend Engineer，參與 104 人力銀行核心產品開發。

主要職責：
- 使用 Nuxt (Vue) 框架執行 Scrum 開發流程
- 主導 SSO 身份驗證整合與 PoC 專案
- 將樣式從 SCSS 遷移至 Tailwind CSS

技術環境：
- 前端：Vue (Nuxt)、TypeScript
- 快取：Redis
- 雲端：AWS`,
		screenshots: [
			"/experiences/104-corporation/01.png",
			"/experiences/104-corporation/02.png",
			"/experiences/104-corporation/03.png",
		],
	},
	{
		id: "mirror-media",
		title: "Frontend Engineer",
		company: "精鏡傳媒 - 鏡文學、鏡好聽",
		companyUrl: "https://www.mirrorvoice.com.tw/",
		location: "Taipei",
		period: "2022/03 - 2023/04",
		techStack: "TypeScript, Vue(Nuxt.js), React(Next.js), GraphQL, GCP",
		highlights: [
			"開發內容平台與活動專案",
			"負責 SSR、身份驗證、支付系統",
			"處理 Docker 容器化與雲端部署",
		],
		fullDescription: `擔任 Frontend Engineer，參與鏡文學、鏡好聽等內容平台開發。

主要職責：
- 開發內容平台與活動專案
- 負責 SSR、身份驗證、支付系統
- 處理 Docker 容器化與雲端部署

技術環境：
- 前端：Vue、React、JavaScript
- API：GraphQL
- 雲端：GCP
- 容器化：Docker`,
		screenshots: [
			"/experiences/mirror-media/01.png",
			"/experiences/mirror-media/02.png",
			"/experiences/mirror-media/03.png",
			"/experiences/mirror-media/04.png",
		],
	},
];

export function getExperienceById(id: string): Experience | undefined {
	return experiences.find((e) => e.id === id);
}
