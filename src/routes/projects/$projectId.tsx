import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ExternalLink,
	Github,
} from "lucide-react";
import { getProjectById } from "../../data/projects";
import { ImageCarousel } from "../../components/ImageCarousel";

export const Route = createFileRoute("/projects/$projectId")({
	component: ProjectDetail,
});

function ProjectDetail() {
	const { projectId } = Route.useParams();
	const project = getProjectById(projectId);

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
				<ImageCarousel
					screenshots={project.screenshots}
					alt={project.name}
				/>

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
