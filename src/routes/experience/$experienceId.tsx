import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getExperienceById } from "../../data/experiences";
import { ImageCarousel } from "../../components/ImageCarousel";

export const Route = createFileRoute("/experience/$experienceId")({
	component: ExperienceDetail,
});

function ExperienceDetail() {
	const { experienceId } = Route.useParams();
	const experience = getExperienceById(experienceId);

	if (!experience) {
		return (
			<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-28 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
						找不到此經歷
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

				{/* Experience Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
						{experience.title}
					</h1>
					<a
						href={experience.companyUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg text-blue-600 dark:text-cyan-400 font-medium hover:underline"
					>
						{experience.company}
					</a>
					<div className="flex flex-wrap gap-4 mt-3 text-sm text-zinc-500 dark:text-zinc-400">
						<span>{experience.period}</span>
						<span>{experience.location}</span>
					</div>
				</div>

				{/* Screenshots Carousel */}
				<ImageCarousel
					screenshots={experience.screenshots}
					alt={experience.company}
				/>

				{/* Tech Stack */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						技術棧
					</h2>
					<div className="flex flex-wrap gap-2">
						{experience.techStack.split(", ").map((tech) => (
							<span
								key={tech}
								className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 text-sm rounded-lg font-medium border border-blue-100 dark:border-blue-900/50"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Highlights */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						工作亮點
					</h2>
					<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
						<ul className="space-y-3">
							{experience.highlights.map((highlight, i) => (
								<li
									key={i}
									className="text-zinc-600 dark:text-zinc-300 flex items-start gap-3"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 mt-2 shrink-0" />
									{highlight}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Full Description */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
						詳細說明
					</h2>
					<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
						<div className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
							{experience.fullDescription}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
