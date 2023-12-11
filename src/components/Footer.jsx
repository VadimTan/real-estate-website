export const Footer = () => {
	return (
		<footer className="flex flex-col items-start pt-[48px] pb-[32px] px-[110px] gap-[16px]">
			<div className="flex py-[32px] items-start gap-[24px] self-stretch border-b-[1px] border-solid border-[#E5E5EA]">
				<span className="font-[Manrope-Light] text-[14px] non-italic font-normal leading-[16px] tracking-[-0.2px] text-[#000]">
					© 2023 DubX. All rights reserved
				</span>
				<span className="font-[Manrope-Light] text-[14px] non-italic font-normal leading-[16px] tracking-[-0.2px] text-[#000]">
					Terms and Conditions
				</span>
				<span className="font-[Manrope-Light] text-[14px] non-italic font-normal leading-[16px] tracking-[-0.2px] text-[#000]">
					Privacy Policy
				</span>
			</div>
			<p className="font-[Manrope-Light] text-[12px] non-italic font-normal leading-[16px] tracking-[-0.1px] opacity-80">
				Stake Properties Limited (Stake) is regulated by the Dubai Financial
				Services Authority (DFSA) as an Operator of a Property Investment
				Crowdfunding Platform. The Stake platform consists of the website, web
				platform and mobile app. By using Stake, you agree to be bound by the{' '}
				<span className="font-[Manrope-Light] text-[12px] non-italic font-normal leading-[16px] tracking-[-0.1px] underline decoration-[#cccccc] ">
					Terms & Conditions
				</span>
				,{' '}
				<span className="font-[Manrope-Light] text-[12px] non-italic font-normal leading-[16px] tracking-[-0.1px] underline decoration-[#cccccc]">
					Cookie Notice
				</span>{' '}
				and{' '}
				<span className="font-[Manrope-Light] text-[12px] non-italic font-normal leading-[16px] tracking-[-0.1px] underline decoration-[#cccccc]">
					Privacy Policy
				</span>
				. All investments through Stake carry risk and are not guaranteed.
				Please read{' '}
				<span className="font-[Manrope-Light] text-[12px] non-italic font-normal leading-[16px] tracking-[-0.2px] underline decoration-[#cccccc]">
					Key Risks
				</span>{' '}
				before investing. Stake Properties Limited does not have Islamic Finance
				endorsement from the DFSA.
			</p>
		</footer>
	);
};
