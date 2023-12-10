import { arrayOfProperties } from '../constants';
import { FundedPropertiesText } from './fundedProperties/FundedPropertiesText';
import { Property } from './fundedProperties/Property';
// import { MultipleSlider } from '../common/MultipleSlider';

export const FundedProperties = () => {
	return (
		<section className="flex flex-col items-center gap-[48px] py-[160px]">
			<FundedPropertiesText />
			<div className="flex items-start gap-[24px] self-stretch">
				{arrayOfProperties.map((item, idx) => {
					return (
						<div
							key={idx}
							className="flex">
							<Property item={item} />
						</div>
					);
				})}
			</div>
		</section>
	);
};
