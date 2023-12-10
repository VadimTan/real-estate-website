import dubXMultiLogo from '../assets/images/dubXMultiLogo.svg';
import { ReadyToStartText } from './ReadyToGetStarted/ReadyToStartText';
import IphoneReadyToStart from '../assets/images/IphoneReadyToStart.svg';

export const ReadyGetStarted = () => {
	const backgroundImageStyle = {
		backgroundImage: `url(${dubXMultiLogo})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
	};
	return (
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
	);
};
