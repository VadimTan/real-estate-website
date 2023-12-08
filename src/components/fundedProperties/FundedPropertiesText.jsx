import arrowPrev from '../../assets/images/arrowLeft.svg';
import arrowForward from '../../assets/images/arrowRight.svg';

export const FundedPropertiesText = () => {
	return (
		<div className="flex items-end gap-[32px] self-stretch">
			<div className="flex flex-col items-start flex-[1_0_0] gap-[16px]">
				<h1 className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
					Funded <span className="text-manrope">properties</span>
				</h1>
				<p className="text-[#9999A3] font-[Manrope-Light] text-[16px] font-normal leading-[24px] tracking-[0.374px]">
					With over 20 years of experience leading major real estate companies
					in Dubai, we utilize our expertise and network to find
					<br /> properties with the greatest investment potential for you.
				</p>
			</div>
			<div className="flex justify-center items-start gap-[16px]">
				<button className="flex flex-col justify-center p-[8px] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
					<img
						className="z-50"
						src={arrowPrev}
						alt="arrowPrev"
					/>
				</button>
				<button className="flex flex-col justify-center p-[8px] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
					<img
						className="z-50"
						src={arrowForward}
						alt="arrowForward"
					/>
				</button>
			</div>
		</div>
	);
};
