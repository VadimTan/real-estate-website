import Iphone from '../assets/images/IphoneProMax.svg';
import light from '../assets/images/light.svg';

export const MainInfo = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="inline-flex flex-col items-center gap-[48px]">
				<div className="flex flex-col items-center gap-[16px]">
					<h1 className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
						<span className="text-manrope">How it</span> works
					</h1>
					<p className="text-[#9999A3] text-center text-[16px] font-normal leading-[24px] tracking-[0.374px]">
						DubX is available to savvy investors all over the world
					</p>
				</div>
				<div className="flex flex-col items-center gap-[24px]">
					<div className="flex items-start gap-[24px]">
						<div className="flex w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
							<div className="flex justify-end items-start gap-[8px] self-stretch">
								<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
									<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
										1
									</span>
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<p className="text-manrope-medium">Browse</p>
								<p className="text-manrope-small">
									Sign up in less than 3 minutes and browse our collection of
									properties
								</p>
							</div>
						</div>
						<div className="flex w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
							<div className="flex justify-end items-start gap-[8px] self-stretch">
								<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
									<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
										2
									</span>
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<p className="text-manrope-medium">Purchase</p>
								<p className="text-manrope-small">
									Buy a piece of the ones you love, starting from only AED 500
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-start gap-[24px]">
						<div className="flex w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
							<div className="flex justify-end items-start gap-[8px] self-stretch">
								<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
									<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
										3
									</span>
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<p className="text-manrope-medium">Own</p>
								<p className="text-manrope-small">
									Sit back and track your income and investments online
								</p>
							</div>
						</div>
						<div className="flex w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
							<div className="flex justify-end items-start gap-[8px] self-stretch">
								<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
									<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
										4
									</span>
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<p className="text-manrope-medium">Exit</p>
								<p className="text-manrope-small">
									Hold, exit or resell your Stake in a way that suits your
									financial goals
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[836px] h-[460px] relative flex-shrink-0 rounded-[24px] bg-[#2C2C2E] flex flex-col items-center my-[150px]">
				<img
					className="w-[255px] h-[460px] flex-shrink-0"
					src={Iphone}
					alt="iphone"
				/>
				<div className="flex absolute -right-20 top-20 w-[320px] p-[24px] justify-center gap-[8px] bg-[#ffffff] rounded-[16px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
					<span className="flex-1 w-[272px] text-[#3C3C3C] text-[14px] font-normal font-['Manrope-Light'] leading-[20px] tracking-[0.374px]">
						Our team of property professionals combine a data driven valuation
						and analysis process with over 20 years of leadership experience at
						the top real estate companies in Dubai, to source the best rental
						properties with the highest investment potential for you.
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center gap-[48px]">
				<div className="inline-flex flex-col items-center gap-[16px]">
					<h1 className="text-[#11B7B3] text-[48px] normal font-extrabold leading-[56px] tracking-[0.374px]">
						<span className="text-manrope">So, how will you</span> make money
						<span className="text-manrope">?</span>
					</h1>
					<p className="text-[#9999A3] text-center text-[16px] font-normal leading-[24px] tracking-[0.374px]">
						DubX was built to empower everyone to own and build wealth through
						real estate
					</p>
				</div>
				<div className="flex flex-row gap-[16px] relative">
					<div className="flex absolute right-0 w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
						<div className="flex justify-end items-start gap-[8px] self-stretch">
							<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
								<img
									className="flex"
									src={light}
									alt="light"
								/>
							</span>
						</div>
						<div className="flex flex-col items-start self-stretch">
							<p className="text-manrope-medium">
								Long term capital appreciation
							</p>
							<p className="text-manrope-small">
								Watch your investment grow as the property value appreciates
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
