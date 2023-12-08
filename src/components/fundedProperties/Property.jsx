/* eslint-disable react/prop-types */
import imgProperty from '../../assets/images/imgProperty.png';
import tagOval from '../../assets/images/tagOval.svg';
import countryFlag from '../../assets/images/countryFlag.svg';

export const Property = ({ item }) => {
	return (
		<div className="flex flex-col items-start gap-[2px] flex-[1_0_0] w-fit">
			<div className="self-stretch relative w-fit">
				<img
					src={imgProperty}
					alt="imgProperty"
				/>
				<div className="flex absolute bottom-[7px] right-[140px] gap-[4px]">
					<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60"></span>
					<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60"></span>
					<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60"></span>
					<span className="w-[24px] h-[3px] rounded-[2px] border-[0.5px] border-solid border-[#ebebf5] border-opacity-60"></span>
				</div>
			</div>
			<div className="flex flex-col items-start gap-[12px] self-stretch px-[16px] pt-[16px] pb-[24px] rounded-t-[12px] rounded-b-[24px] bg-[#F2F2F7] h-fit w-[378px]">
				<div className="flex items-start gap-[8px]">
					<span className="flex py-[4px] px-[8px] gap-[4px] rounded-[12px] bg-[#fff]">
						<img
							src={tagOval}
							alt=""
						/>
						<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
							{item.status}
						</span>
					</span>
					<span className="flex py-[4px] px-[8px] gap-[4px] rounded-[12px] bg-[#fff]">
						<img
							src={countryFlag}
							alt=""
						/>
						<span className="text-[#000] font-[SF-Pro-Regular] text-[11px] non-italic font-semibold leading-[13px] tracking-[0.1px]">
							{item.country}
						</span>
					</span>
				</div>
				<span className="text-[#000] font-[SF-Pro-Display] text-[24px] non-italic font-normal leading-[32px] tracking-[0.8px]">
					{item.title}
				</span>
				<div className="flex flex-col items-start gap-[3.5px] self-stretch">
					<div className="flex items-baseline gap-[3.5px] self-stretch flex-[1_0_0]">
						<span className="text-[#007AFF] font-[SF-Pro-Regular] text-[13px] non-italic font-semibold leading-[18px] tracking-[-0.078px]">
							{item.currency}
						</span>
						<span className="text-[#007AFF] w-[100%] font-[SF-Pro-Regular] text-[17px] non-italic font-semibold leading-[22px] tracking-[-0.408px]">
							{item.value}
						</span>
						<span className="text-[#8E8E93] whitespace-nowrap font-[Manrope-Light] text-[12px] non-italic font-normal leading-[18px] tracking-[-0.078px]">
							{item.percent}% Funded
						</span>
					</div>
					<div
						className={`flex flex-col relative w-full h-[3.5px] bg-[#E5E5EA] rounded-[4px] items-start gap-[7px] self-stretch`}>
						<div
							style={{ width: item.percent + '%' }}
							className={`h-[3.5px] absolute top-0 left-0 self-stretch bg-[#007AFF] rounded-[4px]`}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-[8px] self-stretch">
					<div className="flex items-start gap-[24px] self-stretch relative">
						<span className="text-[#000] font-[SF-Pro-Regular] text-[13px] non-italic font-normal leading-[18px] tracking-[0.1px]">
							Annual Profit
						</span>
						<span className="text-[#000] font-[SF-Pro-Display] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px] absolute right-0">
							{item.currency + ' ' + item.value}
						</span>
					</div>
					<div className="flex items-start gap-[24px] self-stretch relative">
						<span className="text-[#000] font-[SF-Pro-Regular] text-[13px] non-italic font-normal leading-[18px] tracking-[0.1px]">
							Handover
						</span>
						<span className="text-[#000] font-[SF-Pro-Display] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px] absolute right-0">
							{item.handover} Year
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
