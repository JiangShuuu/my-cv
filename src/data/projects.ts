export interface Project {
	id: string;
	name: string;
	shortDescription: string;
	fullDescription: string;
	techStack: string[];
	screenshots: string[];
	links: {
		demo?: string;
		github?: string;
		other?: { label: string; url: string }[];
	};
}

export const projects: Project[] = [
	{
		id: "taiwan-stock-line-chatbot",
		name: "Taiwan Stock LINE Chatbot",
		shortDescription: "台股 LINE 聊天機器人，整合 Python 資料爬蟲與 Gemini AI",
		fullDescription: `台股 LINE 聊天機器人是一個整合多項技術的專案，讓使用者可以透過 LINE 即時查詢台灣股票資訊。

主要功能：
- 技術指標分析
- AI 智能問答（整合 Gemini AI）
- 推播重要股市資訊

技術亮點：
- 使用 Python 進行資料爬蟲，抓取即時股價資料
- 整合 Gemini AI 提供智能股市分析
- LINE Messaging API 實現聊天機器人功能`,
		techStack: ["Python", "LINE Messaging API", "Gemini AI", "Web Scraping"],
		screenshots: ["/projects/line/01.png", "/projects/line/02.png"],
		links: {
			demo: "https://line.me/R/ti/p/@495mujzc",
		},
	},
	{
		id: "railway-monitoring-dashboard",
		name: "Railway Monitoring Dashboard",
		shortDescription: "鐵路監控儀表板，使用 React、WebSocket 與 HLS 串流技術",
		fullDescription: `鐵路監控儀表板是一個即時監控系統，用於監控鐵路運行狀態與即時影像串流。

主要功能：
- 即時影像監控（HLS 串流）
- 列車位置即時追蹤
- 異常事件警報系統
- 歷史數據查詢與分析

技術亮點：
- React 建構響應式使用者介面
- WebSocket 實現即時數據推送
- HLS 串流技術處理即時影像
- 優化大量數據渲染效能`,
		techStack: [
			"Tanstack Start",
			"React",
			"TypeScript",
			"WebSocket",
			"HLS",
			"TailwindCSS",
		],
		screenshots: ["/projects/railway/01.png", "/projects/railway/02.png"],
		links: {
			demo: "https://cg02-smart.skysharp.com.tw/map-view",
			github: "",
		},
	},
	{
		id: "sports-registration-system",
		name: "Sports Association Registration System",
		shortDescription: "運動協會報名系統，採用全端 Monorepo 架構",
		fullDescription: `運動協會報名系統是一個完整的全端應用，提供運動賽事報名與管理功能。

主要功能：
- 賽事活動管理
- 線上報名與繳費
- 參賽者資料管理
- 報名狀態追蹤
- 管理後台

技術亮點：
- Monorepo 架構管理前後端程式碼
- 完整的使用者認證與授權系統
- 整合金流支付功能
- 響應式設計支援多裝置`,
		techStack: [
			"TypeScript",
			"React",
			"Hono.js",
			"PostgreSQL",
			"Monorepo",
			"Cloudflare",
		],
		screenshots: ["/projects/sport/01.png", "/projects/sport/02.png"],
		links: {
			demo: "https://sports-association.vercel.app/",
			other: [
				{
					label: "後台 Demo",
					url: "https://sports-association-back.pages.dev/",
				},
			],
		},
	},
];

export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}
