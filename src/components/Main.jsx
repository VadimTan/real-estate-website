import { AdModernWay } from './AdModernWay';
import { FundedProperties } from './FundedProperties';
import { HowItWorks } from './HowItWorks';
import { InvestInfo } from './InvestInfo';
import { ReadyGetStarted } from './ReadyGetStarted';

export const Main = () => {
	return (
		<main className="flex flex-col items-center">
			<AdModernWay />
			<HowItWorks />
			<InvestInfo />
			<FundedProperties />
			<ReadyGetStarted />
		</main>
	);
};
