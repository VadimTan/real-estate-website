import AppStore from '../assets/images/AppStore.svg';
import GooglePlay from '../assets/images/GooglePlay.svg';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Loader } from '../common/Loader';
import blurredImage from '../assets/images/MobileVector.png';

export const AdModernWay = () => {
	const LazyImage = lazy(() => import('../common/LazyImageVector'));
	const [showOriginal, setShowOriginal] = useState(false);

	const BlurredImage = () => {
		return (
			<img
				className="blurred-image"
				src={blurredImage}
				alt="Blurred Image"
			/>
		);
	};

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setShowOriginal(true);
		};
		img.src = blurredImage;
	}, [LazyImage]);

	return (
		<section
			id="ad-modern-way"
			className="flex items-center flex-col gap-[16px] tablet:pt-[48px]">
			<div className="flex items-center gap-[24px] tablet:flex-col">
				<div
					id="modern-way-block"
					className="flex flex-col tablet:justify-center tablet:items-center w-1/2">
					<div className="flex flex-col gap-[16px]">
						<span className="flex flex-col tablet:items-center tablet:text-center">
							<h1 className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
								The modern
								<span className="text-[#1c1c1e] font-[Manrope-Light] text-[48px] smtablet:text-[40px] normal font-normal leading-[56px] tracking-[0.374px]">
									{' '}
									way for anyone to invest in
								</span>
								<span className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
									{' '}
									real estate
								</span>
							</h1>
						</span>
						<span className="flex flex-col tablet:text-center">
							<h1 className="text-[#3C3C43] text-[16px] smtablet:text-[14px] normal font-medium leading-[24px] tracking-[0.374px]">
								Digitally invest in prime rental properties from only AED 500
								(USD 136), no matter where you are in the world!
							</h1>
						</span>
					</div>
					<div className="flex pt-[32px] items-start gap-[8px]">
						<a
							href="#"
							className="cursor-pointer">
							<img
								className="w-[144px] h-[48px]"
								src={AppStore}
								alt="app_store"
							/>
						</a>
						<a
							href="#"
							className="cursor-pointer">
							<img
								className="w-[162px] h-[48px]"
								src={GooglePlay}
								alt="google_play"
							/>
						</a>
					</div>
				</div>
				<div
					id="modern-way-block"
					className="flex">
					<Suspense fallback={<Loader />}>
						{showOriginal ? <LazyImage /> : <BlurredImage />}
					</Suspense>
				</div>
			</div>
		</section>
	);
};
