/* eslint-disable react/prop-types */
import light from '../../assets/images/light.svg';

export const InvestingCard = ({ item }) => {
	return (
		<div className="flex flex-col items-start gap-[16px] flex-[1_0_0] p-[24px] self-stretch rounded-[12px] bg-[#3A3A3A]">
			<div className="flex justify-end items-start gap-[8px] self-stretch">
				<span className="flex flex-col w-[48px] h-[48px] p-[8px] justify-center items-center gap-[8px] rounded-full bg-[#11B7B3]">
					<img
						src={light}
						alt="light"
					/>
				</span>
			</div>
			<div className="flex flex-col items-start gap-[16px] self-stretch">
				<span className="text-manrope-medium-light">{item.title}</span>
				<span className="text-[#9999a3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] non-italic font-normal leading-[20px] tracking-[0.374px]">
					{item.content}
				</span>
			</div>
		</div>
	);
};
