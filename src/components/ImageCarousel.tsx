import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ImageCarouselProps {
	screenshots: string[];
	alt: string;
}

export function ImageCarousel({ screenshots, alt }: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageError, setImageError] = useState<Record<number, boolean>>({});

	if (screenshots.length === 0) return null;

	const next = () => {
		setCurrentIndex((prev) =>
			prev === screenshots.length - 1 ? 0 : prev + 1,
		);
	};

	const prev = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? screenshots.length - 1 : prev - 1,
		);
	};

	return (
		<div className="mb-8">
			<div className="relative bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden aspect-video shadow-lg">
				<div
					className="flex h-full transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
					}}
				>
					{screenshots.map((src, index) => (
						<div key={index} className="w-full h-full shrink-0">
							{imageError[index] ? (
								<div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
									<ImageOff size={48} className="mb-2" />
									<p>圖片載入失敗</p>
								</div>
							) : (
								<img
									src={src}
									alt={`${alt} screenshot ${index + 1}`}
									className="w-full h-full object-contain"
									onError={() =>
										setImageError((prev) => ({
											...prev,
											[index]: true,
										}))
									}
								/>
							)}
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				{screenshots.length > 1 && (
					<>
						<button
							onClick={prev}
							className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
							aria-label="Previous image"
						>
							<ChevronLeft size={24} />
						</button>
						<button
							onClick={next}
							className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
							aria-label="Next image"
						>
							<ChevronRight size={24} />
						</button>
					</>
				)}
			</div>

			{/* Dots Indicator */}
			{screenshots.length > 1 && (
				<div className="flex justify-center gap-2 mt-4">
					{screenshots.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
								index === currentIndex
									? "bg-blue-600 dark:bg-cyan-400 w-6"
									: "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
							}`}
							aria-label={`Go to image ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
