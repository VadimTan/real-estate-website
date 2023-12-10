/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MultipleSlider = ({ children }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return <Slider {...settings}>{children}</Slider>;
};
