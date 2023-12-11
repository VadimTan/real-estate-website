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
				console.log(response.data);
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
			className="flex flex-col items-center gap-[48px] py-[160px]">
			<FundedPropertiesText
				nextSlide={nextSlide}
				prevSlide={prevSlide}
			/>
			<div className="flex items-start w-full gap-[24px]">
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
		</section>
	);
};
