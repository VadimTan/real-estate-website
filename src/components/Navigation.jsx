import logoDubX from '../assets/images/logoDubX.svg';
import AppStore from '../assets/images/AppStore.svg';
import GooglePlay from '../assets/images/GooglePlay.svg';
import MobileVector from '../assets/images/MobileVector.svg';

export const Navigation = () => {
	return (
		<div className="inline-flex pl-[110px] flex-col items-start gap-[16px]">
			<div className="flex items-center gap-[40px] sticky top-0">
				<img
					className="w-[128px] h-[40px]"
					src={logoDubX}
				/>
				<div className="flex pt-[8px] items-start gap-[24px]">
					<a
						className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px]"
						href="#">
						Properties
					</a>
					<a
						className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px]"
						href="#">
						About Us
					</a>
				</div>
			</div>
			<div className="flex items-center gap-[24px]">
				<div className="flex flex-col gap-[16px] w-[664px]">
					<span className="flex flex-col">
						<h1 className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
							The modern
							<span className="text-manrope"> way for anyone to invest in</span>
							<span className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
								{' '}
								real estate
							</span>
						</h1>
					</span>
					<span className="flex flex-col w-[664px]">
						<h1 className="text-[#3C3C43] text-[16px] normal font-medium leading-[24px] tracking-[0.374px]">
							Digitally invest in prime rental properties from only AED 500 (USD
							136), no matter where you are in the world!
						</h1>
					</span>
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
				<div className="pl-[125px]">
					<img
						className="w-[612px] h-[480px]"
						src={MobileVector}
					/>
				</div>
			</div>
		</div>
	);
};
