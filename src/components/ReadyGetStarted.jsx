import dubXMultiLogo from '../assets/images/dubXMultiLogo.svg';
import { ReadyToStartText } from './ReadyToGetStarted/ReadyToStartText';
import IphoneReadyToStart from '../assets/images/Scene2.png';
import useScreenWidth from '../common/useScreenWidth';

export const ReadyGetStarted = () => {
	const screenWidth = useScreenWidth();
	const backgroundImageStyle = {
		backgroundImage: `url(${dubXMultiLogo})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
	};

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
							className="w-1/3 max-w-none"
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
