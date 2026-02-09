
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#111] w-full pt-12 pb-2 px-2 mt-16">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
				{/* Left: Brand and Social */}
				<div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
					<div className="flex items-center gap-3 mb-4">
						<a href="https://www.munalert.org" target="_blank" rel="noopener noreferrer">
							<img src="Munalert.svg" alt="MUN Alert Logo" className="h-10 w-auto" />
						</a>
			
					</div>
					<p className="text-white text-sm opacity-80 mb-4 max-w-xs text-center md:text-left">
						নিখোঁজ শিশুদের রিপোর্ট এবং খুঁজে বের করার জন্য বাংলাদেশের জাতীয় প্ল্যাটফর্ম। প্রতিটি সেবার গুরুত্বপূর্ন। একসাথে, আমরা শিশুদের ঘরে ফিরিয়ে আনি।
					</p>
					<div className="flex gap-4 mt-2">
						<a href="https://www.facebook.com/MUNalert" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="h-6 w-6 text-white hover:text-[#ea477e] transition" /></a>
						<a href="https://www.facebook.com/MUNalert" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6 text-white hover:text-[#ea477e] transition" /></a>
						<a href="https://www.facebook.com/MUNalert" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube className="h-6 w-6 text-white hover:text-[#ea477e] transition" /></a>
						<a href="https://www.facebook.com/MUNalert" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="h-6 w-6 text-white hover:text-[#ea477e] transition" /></a>
					</div>
				</div>
				{/* Center: Main Logo */}
				<div className="flex flex-col items-center w-full md:w-1/3 mb-2 md:mb-0">
					<img src="/Nikhoj.svg" alt="Main Footer Logo" className="h-48 w-auto" />
				</div>
				{/* Right: Contact Info */}
				<div className="flex flex-col items-center md:items-end w-full md:w-1/3">
					<div className="text-white text-xl font-bold mb-2">জরুরি যোগাযোগ</div>
					<div className="flex items-center gap-2 text-[#ea477e] text-lg mb-1">
						<Phone className="h-5 w-5" />
						<a href="tel:13219" className="hover:underline">13219</a> / <a href="tel:999" className="hover:underline">999</a>
					</div>
					<div className="flex items-center gap-2 text-[#ea477e] text-lg">
						<Mail className="h-5 w-5" />
						<a href="mailto:help@munalert.org" className="hover:underline">help@munalert.org</a>
					</div>
				</div>
			</div>
			<div className="border-t border-white/10 mt-8 py-8 text-center text-white text-xl opacity-70">
				© ২০২৬ মুন আলার্ট। বাংলাদেশ সরকার। সর্বস্বত্ব সংরক্ষিত।
			</div>
		</footer>
	);
}

