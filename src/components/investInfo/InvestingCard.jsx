import light from '../../assets/images/light.svg';

export const InvestingCard = () => {
	return (
		<div className="flex flex-col items-start gap-[16px] flex-[1_0_0] p-[24px] self-stretch rounded-[12px] bg-[#3A3A3A]">
			<div className="flex justify-end items-start gap-[8px] self-stretch">
				<span className="flex flex-col w-[48px] h-48px p-[8px] justify-center items-center gap-[8px] rounded-full bg-[#11B7B3]">
					<img
						src={light}
						alt="light"
					/>
				</span>
			</div>
			<div className="flex flex-col items-start gap-[16px] self-stretch">
				<span className="text-manrope-medium-light">
					Invest in real estate from only AED 500
				</span>
				<span className="text-manrope-small-light">
					With fractionalized properties there is no mortgage or large down
					payments required
				</span>
			</div>
		</div>
	);
};
