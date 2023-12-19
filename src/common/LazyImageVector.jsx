import normalImage from '../assets/images/Group2.png';

const LazyImageVector = () => {
	return (
		<img
			id="vector-img"
			className="w-full max-w-none"
			src={normalImage}
			alt="Mobile Vector"
		/>
	);
};

export default LazyImageVector;
