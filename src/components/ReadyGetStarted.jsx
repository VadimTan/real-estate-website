import { useState, useEffect } from 'react';
import dubXMultiLogo from '../assets/images/dubXMultiLogo.svg';
import { ReadyToStartText } from './ReadyToGetStarted/ReadyToStartText';
import IphoneReadyToStart from '../assets/images/IphoneReadyToStart.svg';

export const ReadyGetStarted = () => {
	const [screenWidth, setScreenWidth] = useState(0);
	const backgroundImageStyle = {
		backgroundImage: `url(${dubXMultiLogo})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
	};

	const handleResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		setScreenWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{screenWidth > 820 ? (
				<section className="bg-[#11B7B3] w-full">
					<div
						className="flex justify-center items-center"
						style={backgroundImageStyle}
						alt="dubX-multi-logo">
						<ReadyToStartText />
						<img
							src={IphoneReadyToStart}
							alt="iphone-ready-to-start"
						/>
					</div>
				</section>
			) : (
				<section className="bg-[#11B7B3] w-full relative">
					<div
						className="flex flex-col pt- items-center w-full h-[600px]"
						style={backgroundImageStyle}
						alt="dubX-multi-logo">
						<ReadyToStartText />
						<div className="flex absolute -bottom-[80px] w-[256px] h-[400px]">
							<img
								className=""
								src={IphoneReadyToStart}
								alt="iphone-ready-to-start"
							/>
						</div>
					</div>
					<div className="flex justify-center items-center w-full h-[100px] absolute -bottom-[80px] bg-[#FFF]" />
				</section>
			)}
		</>
	);
};
