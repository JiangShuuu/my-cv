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
			<div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
						找不到此專案
					</h1>
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:underline"
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
		<div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
			<div className="max-w-4xl mx-auto py-12 px-6">
				{/* Back Button */}
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors mb-8"
				>
					<ArrowLeft size={20} />
					返回首頁
				</Link>

				{/* Project Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
						{project.name}
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{project.shortDescription}
					</p>
				</div>

				{/* Screenshots Carousel */}
				{project.screenshots.length > 0 && (
					<div className="mb-8">
						<div className="relative bg-gray-200 dark:bg-slate-700 rounded-xl overflow-hidden aspect-video">
							{imageError[currentImageIndex] ? (
								<div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
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
										className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
										aria-label="Previous image"
									>
										<ChevronLeft size={24} />
									</button>
									<button
										onClick={nextImage}
										className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
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
										className={`w-2 h-2 rounded-full transition-colors ${
											index === currentImageIndex
												? "bg-blue-600 dark:bg-cyan-400"
												: "bg-gray-300 dark:bg-slate-600"
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
					<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
						技術棧
					</h2>
					<div className="flex flex-wrap gap-2">
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-cyan-400 text-sm rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Project Description */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
						專案說明
					</h2>
					<div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-6">
						<div className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
							{project.fullDescription}
						</div>
					</div>
				</div>

				{/* Links */}
				<div>
					<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
						相關連結
					</h2>
					<div className="flex flex-wrap gap-4">
						{project.links.demo && (
							<a
								href={project.links.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors"
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
								className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-slate-600 transition-colors"
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
								className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
							>
								<ExternalLink size={18} />
								{link.label}
							</a>
						))}
						{!project.links.demo &&
							!project.links.github &&
							!project.links.other?.length && (
								<p className="text-gray-500 dark:text-gray-400">暫無相關連結</p>
							)}
					</div>
				</div>
			</div>
		</div>
	);
}
