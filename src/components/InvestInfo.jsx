import { InvestingCard } from './investInfo/InvestingCard';
import { RealEstInvestText } from './investInfo/RealEstInvestText';

export const InvestInfo = () => {
	return (
		<section className="flex flex-col justify-center items-center py-[64px] gap-[16px] w-[100%] bg-[#2C2C2E]">
			<RealEstInvestText />
			<InvestingCard />
		</section>
	);
};
