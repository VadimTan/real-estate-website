import AppStore from '../../assets/images/AppStore.svg';
import GooglePlay from '../../assets/images/GooglePlay.svg';

export const ReadyToStartText = () => {
	return (
		<div className="inline-flex flex-col items-start gap-[8px] pr-[110px]">
			<div className="flex flex-col items-center gap-[16px]">
				<span className="font-[Manrope-Light] text-[#fff] text-[48px] non-italic font-normal leading-[56px] tracking-[0.4px]">
					<span className="font-[Manrope] text-[#fff] text-[48px] non-italic font-extrabold leading-[56px] tracking-[0.4px]">
						Ready
					</span>{' '}
					to <br /> get started?
				</span>
				<span className="font-[Manrope-Light] text-[#E5E5EA] text-[16px] non-italic font-medium leading-[24px] tracking-[0.4px]">
					It only takes 3 minutes to download <br /> our app, sign up, and
					invest
				</span>
			</div>
			<div className="flex pt-[24px] items-start gap-[8px]">
				<a
					className="cursor-pointer"
					href="#">
					<img
						src={AppStore}
						alt="app-store-download"
					/>
				</a>
				<a
					className="cursor-pointer"
					href="#">
					<img
						src={GooglePlay}
						alt="google-play-download"
					/>
				</a>
			</div>
		</div>
	);
};
