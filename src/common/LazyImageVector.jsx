import MobileVector from '../assets/images/MobileVector.svg';

const LazyImageVector = () => {
	return (
		<img
			id="vector-img"
			className="w-[610px] tablet:w-[320px] smtablet:w-3/4 smtablet:h-3/4 phone:w-[60%] phone:h-3/4 xsm:w-1/2 xsm:h-[250px] max-w-none"
			src={MobileVector}
			alt="Mobile Vector"
		/>
	);
};

export default LazyImageVector;
