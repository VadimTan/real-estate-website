import { useState, useEffect } from 'react';
import AppStore from '../assets/images/AppStore.svg';
import GooglePlay from '../assets/images/GooglePlay.svg';
import logoDubX from '../assets/images/logoDubX.svg';

export const Nav = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showButtons, setShowButtons] = useState(false);

	const handleScroll = () => {
		const currentPosition = window.scrollY;
		setScrollPosition(currentPosition);

		const threshold = 500;
		setShowButtons(scrollPosition > threshold);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<header className="flex h-[64px] z-50 bg-[#FFF] sticky top-0 px-[110px]">
			<nav className="flex gap-[40px] justify-between items-center w-full">
				<div className="flex items-center gap-[40px]">
					<img
						src={logoDubX}
						alt="logoDubX"
					/>
					<div className="flex items-start gap-[24px]">
						<a
							className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px] whitespace-nowrap"
							href="#properties">
							Properties
						</a>
						<a
							className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px] whitespace-nowrap"
							href="#">
							About Us
						</a>
					</div>
				</div>

				{showButtons && (
					<div className="flex items-center gap-[8px]">
						<a
							href="#"
							className="cursor-pointer">
							<img
								className="w-[81px] h-[24px]"
								src={AppStore}
								alt="app_store"
							/>
						</a>
						<a
							href="#"
							className="cursor-pointer">
							<img
								className="w-[72px] h-[24px]"
								src={GooglePlay}
								alt="google_play"
							/>
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};
