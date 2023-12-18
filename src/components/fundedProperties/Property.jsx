/* eslint-disable react/prop-types */
import tagOval from '../../assets/images/tagOval.svg';
import countryFlag from '../../assets/images/countryFlag.svg';
import { hostUrl } from '../../constants/constants';
import { SimpleSlider } from '../../common/SimpleSlider';
import useScreenWidth from '../../common/useScreenWidth';

export const Property = ({ item }) => {
	const screenWidth = useScreenWidth();
	const annual_profit = {
		from: item.annual_profit.split('-')[0].trim(),
		to: item.annual_profit.split('-')[1].trim(),
	};
	const period = {
		from: item.period.split('-')[0].trim(),
		to: item.period.split('-')[1].trim(),
	};

	const propertyImages = item.images;
	const filteredPropertyImages = propertyImages.sort(
		(a, b) => b.main_image - a.main_image
	);

	return (
		<div
			style={{ width: screenWidth > 800 ? '378px' : '306px' }}
			className="flex flex-col items-start gap-[2px] flex-[1_0_0]">
			<div className="self-stretch relative">
				<SimpleSlider>
					{filteredPropertyImages.map((img) => {
						return (
							<img
								key={img.id}
								className="bg-cover bg-no-repeat rounded-t-[24px] rounded-b-[12px] h-[220px]"
								src={`${hostUrl}${img.path}`}
								alt="image"
							/>
						);
					})}
				</SimpleSlider>
			</div>
			<div className="flex flex-col items-start gap-[12px] self-stretch px-[16px] pt-[16px] pb-[24px] rounded-t-[12px] rounded-b-[24px] bg-[#F2F2F7]">
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
							{item.location}
						</span>
					</span>
				</div>
				<span
					id="item-name"
					className="text-[#000] font-[SF-Pro-Display] text-[14px] non-italic font-normal leading-[32px] tracking-[0.8px] whitespace-nowrap overflow-hidden text-ellipsis w-[350px]">
					{item.name}
				</span>
				<div className="flex flex-col items-start gap-[3.5px] self-stretch">
					<div className="flex items-baseline gap-[3.5px] self-stretch flex-[1_0_0]">
						<span className="text-[#007AFF] font-[SF-Pro-Regular] text-[13px] non-italic font-semibold leading-[18px] tracking-[-0.078px]">
							AED
						</span>
						<span className="text-[#007AFF] w-[100%] font-[SF-Pro-Regular] text-[17px] non-italic font-semibold leading-[22px] tracking-[-0.408px]">
							{item.total_price}
						</span>
						<span className="text-[#8E8E93] whitespace-nowrap font-[Manrope-Light] text-[12px] non-italic font-normal leading-[18px] tracking-[-0.078px]">
							{item.funded}% Funded
						</span>
					</div>
					<div
						className={`flex flex-col relative w-full h-[3.5px] bg-[#E5E5EA] rounded-[4px] items-start gap-[7px] self-stretch`}>
						<div
							style={{ width: item.funded + '%' }}
							className={`h-[3.5px] absolute top-0 left-0 self-stretch bg-[#007AFF] rounded-[4px]`}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-[8px] self-stretch">
					<div className="flex items-start gap-[24px] self-stretch justify-between">
						<div className="flex">
							<span className="text-[#000] font-[SF-Pro-Regular] text-[13px] non-italic font-normal leading-[18px] tracking-[0.1px]">
								Annual Profit
							</span>
						</div>
						<div className="flex">
							<span className="text-[#000] font-[SF-Pro-Display] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px]">
								{annual_profit.from + ' - ' + annual_profit.to}
							</span>
						</div>
					</div>
					<div className="flex items-start gap-[24px] self-stretch justify-between">
						<div className="flex">
							<span className="text-[#000] font-[SF-Pro-Regular] text-[13px] non-italic font-normal leading-[18px] tracking-[0.1px]">
								Handover
							</span>
						</div>
						<div className="flex">
							<span className="text-[#000] font-[SF-Pro-Display] text-[12px] non-italic font-semibold leading-[18px] tracking-[0.1px]">
								{period.from + ' - ' + period.to} Years
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
