import { useState, useEffect } from 'react';
import AppStore from '../../assets/images/AppStore.svg';
import GooglePlay from '../../assets/images/GooglePlay.svg';

export const ReadyToStartText = () => {
	const [screenWidth, setScreenWidth] = useState(0);

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
				<div className="inline-flex flex-col items-start pr-[110px] tablet:pl-[25px] gap-[8px]">
					<div className="flex flex-col items-center gap-[16px]">
						<span className="font-[Manrope-Light] text-[#fff] text-[48px] non-italic font-normal leading-[56px] tracking-[0.4px]">
							<span className="font-[Manrope] text-[#fff] text-[48px] non-italic font-extrabold leading-[56px] tracking-[0.4px]">
								Ready
							</span>{' '}
							to <br /> get started?
						</span>
						<span className="font-[Manrope-Light] text-[#E5E5EA] text-[16px] non-italic font-medium leading-[24px] tracking-[0.4px]">
							It only takes 3 minutes to download <br /> our app, sign up, and
							invest
						</span>
					</div>
					<div className="flex pt-[24px] items-start gap-[8px]">
						<a
							className="cursor-pointer"
							href="#">
							<img
								src={AppStore}
								alt="app-store-download"
							/>
						</a>
						<a
							className="cursor-pointer"
							href="#">
							<img
								src={GooglePlay}
								alt="google-play-download"
							/>
						</a>
					</div>
				</div>
			) : (
				<div className="inline-flex flex-col items-center gap-[8px] pt-[50px]">
					<div className="flex flex-col items-center gap-[16px]">
						<span className="font-[Manrope-Light] text-center text-[#fff] text-[48px] phone:text-[40px] non-italic font-normal leading-[56px] tracking-[0.4px]">
							<span className="font-[Manrope] text-center text-[#fff] text-[48px] phone:text-[40px] non-italic font-extrabold leading-[56px] tracking-[0.4px]">
								Ready
							</span>{' '}
							to get started?
						</span>
						<span className="font-[Manrope-Light] text-center text-[#E5E5EA] text-[16px] phone:text-[14px] non-italic font-medium leading-[24px] tracking-[0.4px]">
							It only takes 3 minutes to download our app, sign up, and invest
						</span>
					</div>
					<div className="flex pt-[24px] gap-[8px]">
						<a
							className="cursor-pointer"
							href="#">
							<img
								src={AppStore}
								alt="app-store-download"
							/>
						</a>
						<a
							className="cursor-pointer"
							href="#">
							<img
								src={GooglePlay}
								alt="google-play-download"
							/>
						</a>
					</div>
				</div>
			)}
		</>
	);
};
