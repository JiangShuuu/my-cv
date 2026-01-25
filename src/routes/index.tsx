import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Mail,
	Phone,
	Github,
	Linkedin,
	MapPin,
	Briefcase,
	GraduationCap,
	FolderGit2,
	ArrowRight,
} from "lucide-react";
import { projects } from "../data/projects";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const experiences = [
		{
			title: "Sr. Frontend Engineer",
			company: "創星物聯科技有限公司",
			companyUrl: "https://www.trans-iot.com/tw/about/",
			location: "Remote / Taipei",
			period: "2024/02 - Present",
			techStack: "NodeJS, TypeScript (Vue, React), Python, PostgreSQL, GCP",
			highlights: [
				"主導遠端前端開發，使用 Nuxt/Next 框架",
				"透過 AI 輔助提供 Python/FastAPI 後端支援",
				"負責四個核心平台的跨部門協調",
				"透過 GitHub PR 審查推動程式碼品質改善",
			],
		},
		{
			title: "Frontend Engineer",
			company: "104人力銀行",
			companyUrl: "https://www.104.com.tw/",
			location: "Taipei",
			period: "2023/05 - 2024/02",
			techStack: "NodeJS, TypeScript (Vue), Redis, AWS",
			highlights: [
				"使用 Nuxt (Vue) 框架執行 Scrum 開發流程",
				"主導 SSO 身份驗證整合與 PoC 專案",
				"將樣式從 SCSS 遷移至 Tailwind CSS",
			],
		},
		{
			title: "Frontend Engineer",
			company: "精鏡傳媒 - 鏡文學、鏡好聽",
			companyUrl: "https://www.mirrorvoice.com.tw/",
			location: "Taipei",
			period: "2022/03 - 2023/04",
			techStack: "NodeJS, JavaScript (Vue, React), GraphQL, GCP",
			highlights: [
				"開發內容平台與活動專案",
				"負責 SSR、身份驗證、支付系統",
				"處理 Docker 容器化與雲端部署",
			],
		},
	];

	const previousExperience = [
		{
			title: "品牌客戶經理",
			company: "集客數據行銷",
			url: "https://inboundmarketing.com.tw/",
			period: "2021",
		},
		{
			title: "廣告業務",
			company: "紅門互動有限公司",
			url: "https://www.reddoor.com.tw/",
			period: "2018 - 2019",
		},
		{
			title: "澳洲打工度假",
			company: null,
			url: null,
			period: "2019 - 2021",
		},
		{
			title: "行銷業務",
			company: "辰品國際有限公司",
			url: "https://www.champion23.com/",
			period: "2016 - 2017",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
			{/* Hero Section */}
			<section className="relative py-16 px-6 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10"></div>
				<div className="relative max-w-4xl mx-auto">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						<div className="group/avatar w-32 h-32 perspective-[1000px] cursor-pointer">
							<div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover/avatar:transform-[rotateY(180deg)]">
								{/* Front */}
								<div className="absolute inset-0 rounded-full shadow-xl shadow-blue-500/25 dark:shadow-cyan-500/30 backface-hidden overflow-hidden">
									<img
										src="/person/photo_caton.png"
										alt="Profile"
										className="w-full h-full object-cover"
									/>
								</div>
								{/* Back */}
								<div className="absolute inset-0 rounded-full shadow-xl shadow-purple-500/25 dark:shadow-purple-500/30 backface-hidden transform-[rotateY(180deg)] overflow-hidden">
									<img
										src="/person/photo.png"
										alt="Profile Back"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
						<div className="text-center md:text-left flex-1">
							<h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
								陸強恕{" "}
								<span className="text-blue-600 dark:text-cyan-400 text-3xl md:text-4xl">
									John Lu
								</span>
							</h1>
							<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
								Senior Frontend Engineer
							</p>
							<p className="text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
								4+ 年軟體工程經驗，專精於 TypeScript、React、Vue
								等前端技術，具備 Python 後端開發能力。 曾任職於 104
								人力銀行、精鏡傳媒等企業，擁有豐富的跨部門協作經驗。
							</p>

							{/* Contact Info */}
							<div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
								<a
									href="tel:+886912697801"
									className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
								>
									<Phone size={16} />
									+886 912-697-801
								</a>
								<a
									href="mailto:globelex65@gmail.com"
									className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
								>
									<Mail size={16} />
									globelex65@gmail.com
								</a>
								<a
									href="https://github.com/JiangShuuu"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
								>
									<Github size={16} />
									GitHub
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
								>
									<Linkedin size={16} />
									LinkedIn
								</a>
								<span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
									<MapPin size={16} />
									Taipei, Taiwan
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="space-y-10 mt-10">
				{/* Work Experience Section */}
				<section className="px-6 max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<Briefcase className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
						<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
							工作經歷
						</h2>
					</div>
					<div className="space-y-6">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all duration-300"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
									<div>
										<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
											{exp.title}
										</h3>
										<a
											href={exp.companyUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 dark:text-cyan-400 font-medium"
										>
											{exp.company}
										</a>
									</div>
									<div className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
										<p>{exp.period}</p>
										<p>{exp.location}</p>
									</div>
								</div>
								<p className="text-gray-400 dark:text-gray-500 text-sm mb-3">
									Tech Stack: {exp.techStack}
								</p>
								<ul className="space-y-2">
									{exp.highlights.map((highlight, i) => (
										<li
											key={i}
											className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
										>
											<span className="text-blue-500 dark:text-cyan-400 ">
												•
											</span>
											{highlight}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Projects Section */}
				<section className="px-6 max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<FolderGit2 className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
						<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
							專案作品
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{projects.map((project) => (
							<Link
								key={project.id}
								to="/projects/$projectId"
								params={{ projectId: project.id }}
								className="group bg-white dark:bg-slate-800/50 border flex flex-col justify-between border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all duration-300"
							>
								<div>
									<h3 className="text-lg h-14 font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
										{project.name}
									</h3>
									<p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
										{project.shortDescription}
									</p>
								</div>
								<div className="flex items-center gap-1 text-blue-600 dark:text-cyan-400 text-sm font-medium">
									查看詳情
									<ArrowRight
										size={16}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</div>
							</Link>
						))}
					</div>
				</section>

				{/* Previous Experience Section */}
				<section className="px-6 max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<GraduationCap className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
						<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
							其他經歷
						</h2>
					</div>
					<div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
						<p className="text-gray-500 dark:text-gray-400 mb-4">
							轉職前擁有約 5 年的行銷與業務背景 (2016-2021)
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{previousExperience.map((exp, index) => (
								<div key={index} className="text-center">
									<p className="text-gray-700 dark:text-white font-medium">
										{exp.title}
									</p>
									{exp.company && (
										<p className="text-sm">
											{exp.url ? (
												<a
													href={exp.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 dark:text-cyan-400 hover:underline"
												>
													{exp.company}
												</a>
											) : (
												<span className="text-gray-500 dark:text-gray-400">
													{exp.company}
												</span>
											)}
										</p>
									)}
									<p className="text-gray-400 dark:text-gray-500 text-sm">
										{exp.period}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className="py-8 px-6 text-center text-gray-400 dark:text-gray-500 text-sm">
				<p>© 2026 陸強恕 (John Lu). All rights reserved.</p>
			</footer>
		</div>
	);
}
