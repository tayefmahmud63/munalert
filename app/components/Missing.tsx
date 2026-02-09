import React from "react";

const missingChildren = [
	{
		name: "জুনায়েদ হোসেন সকাল",
		seat: "চট্টগ্রাম-৯ আসন",
		date: "FEBRUARY, 2019",
		img: "/slider_images/1.webp",
	},
	{
		name: "ফাহিম মিয়া",
		seat: "আসন: ঢাকা-১৮",
		date: "16 SEPTEMBER 2025",
		img: "/slider_images/2.webp",
	},
	{
		name: "খাদিজা মায়া",
		seat: "আসন: ঢাকা-১৮",
		date: "16 SEPTEMBER 2025",
		img: "/slider_images/3.webp",
	},
	{
		name: "আবদুল্লাহ আসিম",
		seat: "ঢাকা-১৮ আসন",
		date: "16 SEPTEMBER 2025",
		img: "/slider_images/4.webp",
	},
	// ...add more as needed
];

export default function Missing() {
	return (
		<div className="min-h-screen w-full bg-[#232224] px-2 py-8">
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}>
				নিখোঁজ শিশুদের তালিকা
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
				{missingChildren.map((child, idx) => (
					<div key={idx} className="flex flex-col bg-[#18181a] rounded-2xl shadow-lg overflow-hidden">
	
						<div className="flex-1 flex flex-col justify-center p-4 md:p-6">
                            					<div className="flex-shrink-0 flex items-center justify-center  p-4 md:p-6">
							<img src={child.img} alt={child.name} className="w-32 h-36 md:w-40 md:h-44 object-cover rounded-xl bg-white" />
						</div>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-1 text-center" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}>{child.name}</h2>
							<div className="text-base font-bold mb-1 text-center" style={{ color: '#ea477e', fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif' }}>{child.seat}</div>
							<div className="text-white text-xs md:text-sm mb-2 text-center">{child.date}</div>
							{/* Details section below image */}
							<div className="text-white text-sm md:text-base mt-2 text-center opacity-80">
								{/* Example details, replace with real data if available */}
								{child.details || "বিস্তারিত পড়ুন"}
							</div>
							<div className="flex-1" />
				
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
