/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MultipleSlider = ({ children, slider }) => {
	const settings = {
		dots: false,
		adaptiveHeight: true,
		swipe: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return (
		<Slider
			ref={(c) => (slider.current = c)}
			{...settings}>
			{children}
		</Slider>
	);
};
