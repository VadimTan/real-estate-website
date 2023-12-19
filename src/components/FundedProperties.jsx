import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import baseUrl from '../constants/config';
import { FundedPropertiesText } from './fundedProperties/FundedPropertiesText';
import { Property } from './fundedProperties/Property';
import { MultipleSlider } from '../common/MultipleSlider';

export const FundedProperties = () => {
	const [listOfProperties, setListOfProperties] = useState([]);

	const slider = useRef();

	const nextSlide = () => {
		slider.current.slickNext();
	};
	const prevSlide = () => {
		slider.current.slickPrev();
	};

	useEffect(() => {
		const getAllProperties = async () => {
			try {
				const response = await axios.get(`${baseUrl}/property/getFunded`);
				setListOfProperties(response.data.data);
			} catch (error) {
				return error.message;
			}
		};
		getAllProperties();
	}, []);

	return (
		<section
			id="properties"
			className="flex flex-col justify-center items-center xltablet:py-[80px] tablet:py-[80px]">
			<div className="flex flex-col gap-[48px]">
				<FundedPropertiesText
					nextSlide={nextSlide}
					prevSlide={prevSlide}
				/>
				<div className="flex justify-center gap-[24px]">
					<MultipleSlider slider={slider}>
						{listOfProperties.map((item) => {
							return (
								<div key={item.id}>
									<Property item={item} />
								</div>
							);
						})}
					</MultipleSlider>
				</div>
			</div>
		</section>
	);
};
