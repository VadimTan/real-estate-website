import { AdModernWay } from './AdModernWay';
import { HowItWorks } from './HowItWorks';
import { InvestInfo } from './InvestInfo';

export const Main = () => {
	return (
		<div className="flex flex-col items-center">
			<AdModernWay />
			<HowItWorks />
			<InvestInfo />
		</div>
	);
};
