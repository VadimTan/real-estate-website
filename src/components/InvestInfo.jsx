import { arrayOfInvestInfo } from '../constants';
import { InvestingCard } from './investInfo/InvestingCard';
import { RealEstInvestText } from './investInfo/RealEstInvestText';

export const InvestInfo = () => {
	return (
		<section className="flex flex-col justify-center items-center py-[64px] gap-[16px] bg-[#2C2C2E] w-[100%]">
			<RealEstInvestText />
			<div className="flex justify-center items-center gap-[24px] ">
				{arrayOfInvestInfo.map((item, idx) => {
					return (
						<div
							key={idx}
							className="flex h-[340px] w-[280px] self-stretch items-center">
							<InvestingCard item={item} />
						</div>
					);
				})}
			</div>
		</section>
	);
};
