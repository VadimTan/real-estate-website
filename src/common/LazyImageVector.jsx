import MobileVector from '../assets/images/MobileVector.svg';

const LazyImageVector = () => {
	return (
		<img
			id="vector-img"
			className="w-full max-w-none"
			src={MobileVector}
			alt="Mobile Vector"
		/>
	);
};

export default LazyImageVector;
