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
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
			{/* Hero Section */}
			<section className="relative pt-28 pb-16 px-6 overflow-hidden">
				{/* Subtle gradient background */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/10" />

				{/* Grid pattern overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)]" />

				<div className="relative max-w-4xl mx-auto">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						{/* Avatar with flip animation */}
						<div className="group/avatar w-36 h-36 perspective-[1000px] cursor-pointer">
							<div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover/avatar:transform-[rotateY(180deg)]">
								{/* Front */}
								<div className="absolute inset-0 rounded-2xl shadow-xl shadow-blue-500/10 dark:shadow-cyan-500/20 backface-hidden overflow-hidden ring-2 ring-white dark:ring-zinc-800">
									<img
										src="/person/photo_caton.png"
										alt="Profile"
										className="w-full h-full object-cover"
									/>
								</div>
								{/* Back */}
								<div className="absolute inset-0 rounded-2xl shadow-xl shadow-purple-500/10 dark:shadow-purple-500/20 backface-hidden transform-[rotateY(180deg)] overflow-hidden ring-2 ring-white dark:ring-zinc-800">
									<img
										src="/person/photo.png"
										alt="Profile Back"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>

						<div className="text-center md:text-left flex-1">
							<h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
								陸強恕{" "}
								<span className="text-blue-600 dark:text-cyan-400 text-3xl md:text-4xl font-semibold">
									John Lu
								</span>
							</h1>
							<p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-4 font-medium">
								Senior Frontend Engineer
							</p>
							<p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-2xl leading-relaxed">
								4+ 年軟體工程經驗，專精於 TypeScript、React、Vue
								等前端技術，具備 Python 後端開發能力。 曾任職於 104
								人力銀行、精鏡傳媒等企業，擁有豐富的跨部門協作經驗。
							</p>

							{/* Contact Info */}
							<div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
								<a
									href="tel:+886912697801"
									className="flex items-center gap-2 px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30 rounded-lg transition-all duration-200 cursor-pointer"
								>
									<Phone size={15} />
									+886 912-697-801
								</a>
								<a
									href="mailto:globelex65@gmail.com"
									className="flex items-center gap-2 px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30 rounded-lg transition-all duration-200 cursor-pointer"
								>
									<Mail size={15} />
									globelex65@gmail.com
								</a>
								<a
									href="https://github.com/JiangShuuu"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30 rounded-lg transition-all duration-200 cursor-pointer"
								>
									<Github size={15} />
									GitHub
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30 rounded-lg transition-all duration-200 cursor-pointer"
								>
									<Linkedin size={15} />
									LinkedIn
								</a>
								<span className="flex items-center gap-2 px-3 py-1.5 text-zinc-500 dark:text-zinc-400">
									<MapPin size={15} />
									Taipei, Taiwan
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="space-y-12 pb-16">
				{/* Work Experience Section */}
				<section className="px-6 max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-xl">
							<Briefcase className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
							工作經歷
						</h2>
					</div>
					<div className="space-y-4">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-cyan-900 transition-all duration-300"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
									<div>
										<h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
											{exp.title}
										</h3>
										<a
											href={exp.companyUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 dark:text-cyan-400 font-medium hover:underline cursor-pointer"
										>
											{exp.company}
										</a>
									</div>
									<div className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 md:mt-0 md:text-right">
										<p className="font-medium">{exp.period}</p>
										<p>{exp.location}</p>
									</div>
								</div>
								<p className="text-zinc-400 dark:text-zinc-500 text-sm mb-3 font-mono">
									{exp.techStack}
								</p>
								<ul className="space-y-2">
									{exp.highlights.map((highlight, i) => (
										<li
											key={i}
											className="text-zinc-600 dark:text-zinc-300 flex items-start gap-3"
										>
											<span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 mt-2 flex-shrink-0" />
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
						<div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-xl">
							<FolderGit2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
							專案作品
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{projects.map((project) => (
							<Link
								key={project.id}
								to="/projects/$projectId"
								params={{ projectId: project.id }}
								className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-cyan-900 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
							>
								<div>
									<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2 min-h-[3.5rem]">
										{project.name}
									</h3>
									<p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
										{project.shortDescription}
									</p>
								</div>
								<div className="flex items-center gap-1 text-blue-600 dark:text-cyan-400 text-sm font-medium">
									查看詳情
									<ArrowRight
										size={16}
										className="group-hover:translate-x-1 transition-transform duration-200"
									/>
								</div>
							</Link>
						))}
					</div>
				</section>

				{/* Previous Experience Section */}
				<section className="px-6 max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-6">
						<div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-xl">
							<GraduationCap className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
							其他經歷
						</h2>
					</div>
					<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
						<p className="text-zinc-500 dark:text-zinc-400 mb-5">
							轉職前擁有約 5 年的行銷與業務背景 (2016-2021)
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{previousExperience.map((exp, index) => (
								<div
									key={index}
									className="text-center p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
								>
									<p className="text-zinc-800 dark:text-white font-medium mb-1">
										{exp.title}
									</p>
									{exp.company && (
										<p className="text-sm mb-1">
											{exp.url ? (
												<a
													href={exp.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
												>
													{exp.company}
												</a>
											) : (
												<span className="text-zinc-500 dark:text-zinc-400">
													{exp.company}
												</span>
											)}
										</p>
									)}
									<p className="text-zinc-400 dark:text-zinc-500 text-sm">
										{exp.period}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
				<p className="text-center text-zinc-400 dark:text-zinc-500 text-sm">
					© 2026 陸強恕 (John Lu). All rights reserved.
				</p>
			</footer>
		</div>
	);
}
