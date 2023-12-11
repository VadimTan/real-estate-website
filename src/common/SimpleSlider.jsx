/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SimpleSlider = ({ children }) => {
	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		swipe: false,
		adaptiveHeight: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots) => {
			return <ul className="slick-dots">{dots}</ul>;
		},
		dotsClass: 'slick-dots custom',
	};

	return <Slider {...settings}>{children}</Slider>;
};
