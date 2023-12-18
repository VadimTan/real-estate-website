import { arrayHowItWorks } from '../constants/constants';
import { HowToMakeMoney } from './howItWorks/HowToMakeMoney';
import { InfoAboutTeam } from './howItWorks/InfoAboutTeam';
import useScreenWidth from '../common/useScreenWidth';

export const HowItWorks = () => {
	const topItems = arrayHowItWorks.slice(0, 2);
	const bottomItems = arrayHowItWorks.slice(2, 4);
	const screenWidth = useScreenWidth();

	return (
		<>
			{screenWidth >= 576 ? (
				<section className="inline-flex flex-col items-center gap-[48px] pt-[48px]">
					<div className="flex flex-col items-center gap-[16px]">
						<h1 className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
							<span className="text-[#1c1c1e] font-[Manrope-Light] text-[48px] smtablet:text-[40px] normal font-normal leading-[56px] tracking-[0.374px]">
								How it
							</span>{' '}
							works
						</h1>
						<p className="text-[#9999A3] text-center text-[16px] smtablet:text-[14px] font-normal leading-[24px] tracking-[0.374px]">
							DubX is available to savvy investors all over the world
						</p>
					</div>
					<div className="flex flex-col gap-[24px]">
						<div className="flex items-center gap-[24px]">
							{topItems.map((item, idx) => {
								return (
									<div
										key={idx}
										className="flex items-start gap-[24px]">
										<div className="flex w-[320px] phone:w-[250px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
											<div className="flex justify-end items-start gap-[8px] self-stretch">
												<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
													<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
														{item.id}
													</span>
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-manrope-medium">
													{item.title}
												</span>
												<p className="text-[#9999a3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] font-medium leading-[20px] tracking-[0.374px]">
													{item.content}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="flex items-center gap-[24px]">
							{bottomItems.map((item, idx) => {
								return (
									<div
										key={idx}
										className="flex items-start gap-[24px]">
										<div className="flex w-[320px] phone:w-[250px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
											<div className="flex justify-end items-start gap-[8px] self-stretch">
												<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
													<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
														{item.id}
													</span>
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-manrope-medium">
													{item.title}
												</span>
												<p className="text-[#9999a3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] font-medium leading-[20px] tracking-[0.374px]">
													{item.content}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			) : (
				<section className="flex flex-col items-center gap-[48px] pt-[48px]">
					<div className="flex flex-col items-center gap-[16px]">
						<h1 className="text-[#11B7B3] text-[48px] smtablet:text-[40px] normal font-extrabold leading-[56px] tracking-[0.374px]">
							<span className="text-[#1c1c1e] font-[Manrope-Light] text-[48px] smtablet:text-[40px] normal font-normal leading-[56px] tracking-[0.374px]">
								How it
							</span>{' '}
							works
						</h1>
						<p className="text-[#9999A3] text-center text-[16px] smtablet:text-[14px] font-normal leading-[24px] tracking-[0.374px]">
							DubX is available to savvy investors all over the world
						</p>
					</div>
					<div className="flex flex-col gap-[24px]">
						<div className="flex flex-col items-center gap-[24px]">
							{arrayHowItWorks.map((item, idx) => {
								return (
									<div
										key={idx}
										className="flex items-start gap-[24px]">
										<div
											id="how-it-works-card"
											className="flex w-[320px] p-[24px] flex-col items-start gap-[8px] rounded-[12px] bg-[#F2F2F7] hover:bg-[#FFFFFF] transition ease-in-out duration-300 cursor-pointer hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
											<div className="flex justify-end items-start gap-[8px] self-stretch">
												<span className="flex w-[32px] h-[32px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[32px] bg-[#11B7B3]">
													<span className="text-[#3A3A3A] text-[16px] font-medium leading-[24px] tracking-[0.374px]">
														{item.id}
													</span>
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch">
												<span className="text-manrope-medium">
													{item.title}
												</span>
												<p className="text-[#9999a3] font-[Manrope-Light] text-[16px] smtablet:text-[14px] font-medium leading-[20px] tracking-[0.374px]">
													{item.content}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			)}
			<InfoAboutTeam />
			<HowToMakeMoney />
		</>
	);
};
