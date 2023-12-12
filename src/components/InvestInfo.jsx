import { useState, useEffect } from 'react';
import { arrayOfInvestInfo } from '../constants/constants';
import { InvestingCard } from './investInfo/InvestingCard';
import { RealEstInvestText } from './investInfo/RealEstInvestText';

export const InvestInfo = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		setScreenWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const firstRow = arrayOfInvestInfo.slice(0, 2);
	const secondRow = arrayOfInvestInfo.slice(2, 4);

	return (
		<section className="flex flex-col justify-center items-center py-[64px] px-[110px] 3xl:px-[360px] xltablet:px-[50px] tablet:px-[24px] gap-[16px] bg-[#2C2C2E] w-full">
			<RealEstInvestText />
			{screenWidth <= 992 ? (
				<div className="flex flex-col justify-center items-center gap-[24px]">
					<div className="flex flex-wrap justify-center gap-[24px]">
						{firstRow.map((item, idx) => {
							return (
								<div
									key={idx}
									className="flex self-stretch items-center w-[280px] h-[350px] 3xl:w-[275px] 3xl:h-[340px] xltablet:w-[275px] xltablet:h-[340px] tablet:w-[340px] tablet:h-[300px]">
									<InvestingCard item={item} />
								</div>
							);
						})}
					</div>
					<div className="flex flex-wrap justify-center gap-[24px]">
						<div className="flex flex-row justify-between items-center gap-[24px]">
							{secondRow.map((item, idx) => (
								<div
									key={idx}
									className="flex self-stretch items-center w-[280px] h-[350px] 3xl:w-[275px] 3xl:h-[340px] xltablet:w-[275px] xltablet:h-[340px] tablet:w-[340px] tablet:h-[300px]">
									<InvestingCard item={item} />
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-between items-center gap-[24px]">
					{arrayOfInvestInfo.map((item, idx) => {
						return (
							<div
								key={idx}
								className="flex self-stretch items-center w-[280px] h-[350px] 3xl:w-[275px] 3xl:h-[340px] tablet:w-[340px] tablet:h-[290px] xltablet:w-[275px] xltablet:h-[340px]">
								<InvestingCard item={item} />
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};
