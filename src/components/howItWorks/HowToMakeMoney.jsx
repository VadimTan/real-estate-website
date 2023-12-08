import { Card } from './Card';
import light from '../../assets/images/light.svg';
import filled2 from '../../assets/images/filled2.svg';

export const HowToMakeMoney = () => {
	return (
		<section className="flex flex-col items-center gap-[48px] pb-[160px]">
			<div className="inline-flex flex-col items-center gap-[16px]">
				<h1 className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
					<span className="text-manrope">So, how will you</span> make money
					<span className="text-manrope">?</span>
				</h1>
				<p className="text-[#9999A3] font-[Manrope] text-center text-[16px] font-normal leading-[24px] tracking-[0.374px]">
					DubX was built to empower everyone to own and build wealth through
					real estate
				</p>
			</div>
			<div className="flex flex-row gap-[24px]">
				<div className="flex flex-col">
					<div className="flex w-fit h-[170px]" />
					<div className="flex w-[320px] h-fit p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
						<div className="flex justify-end items-start gap-[8px] self-stretch">
							<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
								<img
									className="flex"
									src={light}
									alt="light"
								/>
							</span>
						</div>
						<div className="flex flex-col items-start">
							<p className="text-manrope-medium">
								Long term capital appreciation
							</p>
							<p className="text-manrope-small">
								Watch your investment grow as the property value appreciates
							</p>
						</div>
					</div>
				</div>
				<Card />
				<div className="flex flex-col">
					<div className="flex w-[320px] h-fit p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
						<div className="flex justify-end items-start gap-[8px] self-stretch">
							<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
								<img
									className="flex"
									src={filled2}
									alt="light"
								/>
							</span>
						</div>
						<div className="flex flex-col items-start self-stretch">
							<p className="text-manrope-medium">Monthly rental income</p>
							<p className="text-manrope-small">
								Consistent passive income from monthly rental payments
							</p>
						</div>
					</div>
					<div className="flex w-fit h-[170px]" />
				</div>
			</div>
		</section>
	);
};
