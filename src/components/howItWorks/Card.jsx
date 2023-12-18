import imageSlider from '../../assets/images/imageSlider.png';
import uiIcon from '../../assets/images/ui-icon.svg';
import countryFlag from '../../assets/images/countryFlag.svg';
import tagOval from '../../assets/images/tagOval.svg';
import bedIcon from '../../assets/images/bedIcon.png';
import icon_bookmark from '../../assets/images/icon_Bookmark.svg';
import useScreenWidth from '../../common/useScreenWidth';

export const Card = () => {
	const screenWidth = useScreenWidth();

	return (
		<div className="flex flex-col relative flex-shrink-0">
			<div className="flex flex-col justify-center items-center flex-shrink-0">
				<img
					className="rounded-[32px]"
					src={imageSlider}
					alt="imageSlider"
				/>
				<div className="flex flex-col absolute bottom-1 items-start w-[312px] pt-[14px] pb-[21px] px-[10px] gap-[14px] rounded-t-[14px] rounded-b-[32px] bg-[#fff]">
					<span className="text-[#000] font-[SF-Pro-Display] text-[20px] non-italic font-normal leading-[25px] tracking-[0.38px]">
						3 Bed Villa in Dubai
					</span>
					<div className="flex flex-col items-start gap-[3.5px] self-stretch">
						<div className="flex items-baseline gap-[3.5px] self-stretch flex-[1_0_0]">
							<span className="text-[#007AFF] font-[SF-Pro-Regular] text-[13px] non-italic font-semibold leading-[18px] tracking-[-0.078px]">
								AED
							</span>
							<span className="text-[#007AFF] w-[100%] font-[SF-Pro-Regular] text-[17px] non-italic font-semibold leading-[22px] tracking-[-0.408px]">
								1,595,518
							</span>
							<span className="text-[#8E8E93] whitespace-nowrap font-[Manrope-Light] text-[12px] non-italic font-normal leading-[18px] tracking-[-0.078px]">
								48% Funded
							</span>
						</div>
						<span className="flex flex-col bg-[#E5E5EA] rounded-[3.5px] pr-[177px] items-start gap-[7px] self-stretch">
							<span className="h-[3.5px] self-stretch bg-[#007AFF] rounded-[3.5px]" />
						</span>
					</div>
					<div className="flex flex-col items-start gap-[7px] self-stretch">
						<div className="flex items-start gap-[21px] self-stretch flex-[1_0_0]">
							<div className="flex w-[100%] items-baseline gap-[3.5px]">
								<span className="text-[#9999a3] font-[SF-Pro-Regular] text-[11px] non-italic font-medium leading-[13px] tracking-[0.1px]">
									Annual Profit
								</span>
								<span className="text-[#000] font-[SF-Pro-Regular] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px]">
									9.98%
								</span>
							</div>
							<div className="flex whitespace-nowrap justify-end items-baseline gap-[3.5px]">
								<span className="text-[#9999a3] font-[SF-Pro-Regular] text-[11px] non-italic font-medium leading-[13px] tracking-[0.1px]">
									Handover
								</span>
								<span className="text-[#000] font-[SF-Pro-Regular] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px]">
									1 Year
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="inline-flex items-start gap-[7px] absolute bottom-[145px] right-[30px]">
				<div className="flex whitespace-nowrap py-[3.5px] px-[7px] items-center gap-[3.5px] rounded-[10.5px] bg-[#fff]">
					<img
						className="w-[7px] h-[7px]"
						src={tagOval}
						alt="tag"
					/>
					<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
						High ROI
					</span>
				</div>
				<div className="flex whitespace-nowrap py-[3.5px] px-[7px] items-center gap-[3.5px] rounded-[10.5px] bg-[#fff]">
					<img
						className=""
						src={countryFlag}
						alt="country"
					/>
					<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
						Dubai
					</span>
				</div>
				<div className="flex whitespace-nowrap py-[3.5px] px-[7px] items-center gap-[3.5px] rounded-[10.5px] bg-[#fff]">
					<img
						src={bedIcon}
						alt="bed"
					/>
					<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
						1 Bed
					</span>
				</div>
				<div className="flex whitespace-nowrap py-[3.5px] px-[7px] items-center gap-[3.5px] rounded-[10.5px] bg-[#fff]">
					<img
						className=""
						src={uiIcon}
						alt="ui"
					/>
					<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
						182 sq.ft
					</span>
				</div>
			</div>
			<div className="inline-flex absolute top-[7px] right-[110px] gap-[3.5px]">
				<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60 bg-[#fff]" />
				<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60" />
				<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60" />
				<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60" />
			</div>
			{screenWidth <= 320 ? (
				<div className="flex absolute right-0 -top-[15px] flex-col w-[96px] h-[96px] p-[12px] items-center gap-[12px] flex-shrink-0 rounded-[48px] border-[1.5px] border-solid border-[#FFF] bg-[#FFF] bg-opacity-60 backdrop-blur-[5.25px] shadow-[10px_10px_10px_0px_rgba(35,40,44,0.15)]">
					<img
						className="absolute right-[31px] top-[32px] flex-shrink-0"
						src={icon_bookmark}
						alt="bookmark"
					/>
				</div>
			) : (
				<div className="flex absolute -right-[15px] -top-[20px] flex-col w-[96px] h-[96px] p-[12px] items-center gap-[12px] flex-shrink-0 rounded-[48px] border-[1.5px] border-solid border-[#FFF] bg-[#FFF] bg-opacity-60 backdrop-blur-[5.25px] shadow-[10px_10px_10px_0px_rgba(35,40,44,0.15)]">
					<img
						className="absolute right-[31px] top-[32px] flex-shrink-0"
						src={icon_bookmark}
						alt="bookmark"
					/>
				</div>
			)}
		</div>
	);
};
