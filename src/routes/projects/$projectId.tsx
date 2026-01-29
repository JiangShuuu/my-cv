import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ExternalLink,
	Github,
	ImageOff,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { getProjectById } from "../../data/projects";

export const Route = createFileRoute("/projects/$projectId")({
	component: ProjectDetail,
});

function ProjectDetail() {
	const { projectId } = Route.useParams();
	const project = getProjectById(projectId);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imageError, setImageError] = useState<Record<number, boolean>>({});

	if (!project) {
		return (
			<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
						找不到此專案
					</h1>
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
					>
						<ArrowLeft size={20} />
						返回首頁
					</Link>
				</div>
			</div>
		);
	}

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === project.screenshots.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? project.screenshots.length - 1 : prev - 1,
		);
	};

	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
			<div className="max-w-4xl mx-auto pt-28 pb-16 px-6">
				{/* Back Button */}
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 mb-8 cursor-pointer group"
				>
					<ArrowLeft
						size={20}
						className="group-hover:-translate-x-1 transition-transform duration-200"
					/>
					返回首頁
				</Link>

				{/* Project Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
						{project.name}
					</h1>
					<p className="text-lg text-zinc-600 dark:text-zinc-300">
						{project.shortDescription}
					</p>
				</div>

				{/* Screenshots Carousel */}
				{project.screenshots.length > 0 && (
					<div className="mb-8">
						<div className="relative bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden aspect-video shadow-lg">
							{imageError[currentImageIndex] ? (
								<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
									<ImageOff size={48} className="mb-2" />
									<p>圖片載入失敗</p>
									<p className="text-sm mt-1">
										請稍後新增截圖至 public/projects/
									</p>
								</div>
							) : (
								<div className="w-full h-full">
									<img
										src={project.screenshots[currentImageIndex]}
										alt={`${project.name} screenshot ${currentImageIndex + 1}`}
										className="w-full h-full object-contain"
										onError={() =>
											setImageError((prev) => ({
												...prev,
												[currentImageIndex]: true,
											}))
										}
									/>
								</div>
							)}

							{/* Navigation Arrows */}
							{project.screenshots.length > 1 && (
								<>
									<button
										onClick={prevImage}
										className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
										aria-label="Previous image"
									>
										<ChevronLeft size={24} />
									</button>
									<button
										onClick={nextImage}
										className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
										aria-label="Next image"
									>
										<ChevronRight size={24} />
									</button>
								</>
							)}
						</div>

						{/* Dots Indicator */}
						{project.screenshots.length > 1 && (
							<div className="flex justify-center gap-2 mt-4">
								{project.screenshots.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentImageIndex(index)}
										className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
											index === currentImageIndex
												? "bg-blue-600 dark:bg-cyan-400 w-6"
												: "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
										}`}
										aria-label={`Go to image ${index + 1}`}
									/>
								))}
							</div>
						)}
					</div>
				)}

				{/* Tech Stack */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						技術棧
					</h2>
					<div className="flex flex-wrap gap-2">
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 text-sm rounded-lg font-medium border border-blue-100 dark:border-blue-900/50"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Project Description */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						專案說明
					</h2>
					<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
						<div className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
							{project.fullDescription}
						</div>
					</div>
				</div>

				{/* Links */}
				<div>
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						相關連結
					</h2>
					<div className="flex flex-wrap gap-3">
						{project.links.demo && (
							<a
								href={project.links.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-cyan-600 text-white rounded-xl hover:bg-blue-700 dark:hover:bg-cyan-700 transition-all duration-200 cursor-pointer font-medium shadow-sm hover:shadow-md"
							>
								<ExternalLink size={18} />
								線上 Demo
							</a>
						)}
						{project.links.github && (
							<a
								href={project.links.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 dark:bg-zinc-700 text-white rounded-xl hover:bg-zinc-900 dark:hover:bg-zinc-600 transition-all duration-200 cursor-pointer font-medium shadow-sm hover:shadow-md"
							>
								<Github size={18} />
								GitHub
							</a>
						)}
						{project.links.other?.map((link) => (
							<a
								key={link.url}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 cursor-pointer font-medium border border-zinc-200 dark:border-zinc-700"
							>
								<ExternalLink size={18} />
								{link.label}
							</a>
						))}
						{!project.links.demo &&
							!project.links.github &&
							!project.links.other?.length && (
								<p className="text-zinc-500 dark:text-zinc-400">暫無相關連結</p>
							)}
					</div>
				</div>
			</div>
		</div>
	);
}
