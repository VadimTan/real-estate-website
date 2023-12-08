import logoDubX from '../assets/images/logoDubX.svg';

export const Nav = () => {
	return (
		<nav className="flex h-[64px] z-50 bg-[#FFF] items-center sticky top-0 px-[110px]">
			<div className="flex items-center gap-[40px]">
				<img
					src={logoDubX}
					alt="logoDubX"
				/>
				<div className="flex pt-[8px] items-start gap-[24px]">
					<a
						className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px] whitespace-nowrap"
						href="#">
						Properties
					</a>
					<a
						className="text-[#3C3C43] text-[14px] normal font-semibold leading-[16px] tracking-[-0.14px] whitespace-nowrap"
						href="#">
						About Us
					</a>
				</div>
			</div>
		</nav>
	);
};
