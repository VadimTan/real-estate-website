/* eslint-disable react/prop-types */
import arrowPrev from '../../assets/images/arrowLeft.svg';
import arrowForward from '../../assets/images/arrowRight.svg';
import useScreenWidth from '../../common/useScreenWidth';

export const FundedPropertiesText = ({ nextSlide, prevSlide }) => {
	const screenWidth = useScreenWidth();

	return (
		<>
			{screenWidth > 568 ? (
				<div className="flex items-end gap-[32px] self-stretch">
					<div className="flex flex-col items-start flex-[1_0_0] gap-[16px]">
						<h1 className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
							Funded{' '}
							<span className="text-[#1c1c1e] font-[Manrope-Light] text-[48px] smtablet:text-[40px] normal font-normal leading-[56px] tracking-[0.374px]">
								properties
							</span>
						</h1>
						<p className="text-[#9999A3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] font-normal leading-[24px] tracking-[0.374px]">
							With over 20 years of experience leading major real estate
							companies in Dubai, we utilize our expertise and network to find
							properties with the greatest investment potential for you.
						</p>
					</div>
					<div className="flex justify-center items-start gap-[16px]">
						<button
							onClick={prevSlide}
							className="flex flex-col justify-center p-[8px] bg-[#FFF] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
							<img
								className="z-50"
								src={arrowPrev}
								alt="arrowPrev"
							/>
						</button>
						<button
							onClick={nextSlide}
							className="flex flex-col justify-center bg-[#FFF] p-[8px] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
							<img
								className="z-50"
								src={arrowForward}
								alt="arrowForward"
							/>
						</button>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-end gap-[32px] self-stretch">
					<div className="flex flex-col items-start flex-[1_0_0] gap-[16px]">
						<h1 className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
							Funded{' '}
							<span className="text-[#1c1c1e] font-[Manrope-Light] text-[48px] smtablet:text-[40px] normal font-normal leading-[56px] tracking-[0.374px]">
								properties
							</span>
						</h1>
						<p className="text-[#9999A3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] font-normal leading-[24px] tracking-[0.374px]">
							With over 20 years of experience leading major real estate
							companies in Dubai, we utilize our expertise and network to find
							properties with the greatest investment potential for you.
						</p>
					</div>
					<div className="flex justify-center items-start gap-[16px]">
						<button
							onClick={prevSlide}
							className="flex flex-col justify-center bg-[#FFF] p-[8px] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
							<img
								className="z-50"
								src={arrowPrev}
								alt="arrowPrev"
							/>
						</button>
						<button
							onClick={nextSlide}
							className="flex flex-col justify-center bg-[#FFF] p-[8px] items-center w-[48px] h-[48px] gap-[8px] rounded-[48px] border-[1px] border-solid border-[#11B7B3] hover:bg-[#11b7b3] transition ease-in-out duration-300 hover:bg-opacity-10">
							<img
								className="z-50"
								src={arrowForward}
								alt="arrowForward"
							/>
						</button>
					</div>
				</div>
			)}
		</>
	);
};
