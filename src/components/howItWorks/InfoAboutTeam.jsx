// import Iphone from '../../assets/images/iPhoneProMax.svg';
import IphonePng from '../../assets/images/iPhoneProMax.png';

export const InfoAboutTeam = () => {
	return (
		<section
			id="about-us"
			className="w-[60%] phone:w-[530px] smtablet:px-[70px] h-fit relative flex-shrink-0 rounded-[24px] bg-[#2C2C2E] flex flex-col items-center my-[160px] phone:mt-[60px] phone:mb-[100px]">
			<div className="flex">
				<img
					id="info-about"
					className="w-[210px] h-[400px] flex-shrink-0 max-w-none pt-[25px]"
					src={IphonePng}
					alt="iphone"
				/>
			</div>
			<div
				id="text-about-us"
				className="flex absolute tablet:right-[0px] tablet:top-[410px] tablet:-bottom-[125px] tablet:w-full -right-20 top-20 h-fit w-[320px] p-[24px] justify-center gap-[8px] bg-[#ffffff] rounded-[16px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.03)]">
				<span className="text-[#3C3C3C] text-[14px] font-normal font-['Manrope-Light'] leading-[20px] tracking-[0.374px]">
					Our team of property professionals combine a data driven valuation and
					analysis process with over 20 years of leadership experience at the
					top real estate companies in Dubai, to source the best rental
					properties with the highest investment potential for you.
				</span>
			</div>
		</section>
	);
};
