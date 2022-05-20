import React, { useState } from 'react';
import Image from 'next/image';
import { TextHeader } from '../../UI';
import { dataServices } from './data';

const Services = () => {
	const [services, setServices] = useState(dataServices);
	return (
		<section id="services" className="section is-large">
			<div className="header-text">
				<TextHeader>خدماتنا</TextHeader>
			</div>
			<div className="services columns is-multiline is-mobile is-flex-direction-row-reverse">
				{services.length !== 0 ? (
					services.map((setData, i) => (
						<div key={i} className="column is-one-third">
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<Image
											src={setData.image}
											alt={setData.title}
											layout="fill"
										/>
									</figure>
									<div className="content">
										{setData.title}
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p>no data</p>
				)}

				{/* <div className="column is-one-third">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image
									src="/assets/images/services.jpg"
									alt="Placeholder image"
									layout="fill"
								/>
							</figure>
							<div className="content">
								Lorem ipsum dolor sit amet,
							</div>
						</div>
					</div>
				</div>

				<div className="column is-one-third">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image
									src="/assets/images/services.jpg"
									alt="Placeholder image"
									layout="fill"
								/>
							</figure>
							<div className="content">
								Lorem ipsum dolor sit amet,
							</div>
						</div>
					</div>
				</div>

				<div className="column is-one-third">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image
									src="/assets/images/services.jpg"
									alt="Placeholder image"
									layout="fill"
								/>
							</figure>
							<div className="content">
								Lorem ipsum dolor sit amet,
							</div>
						</div>
					</div>
				</div>

				<div className="column is-one-third">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image
									src="/assets/images/services.jpg"
									alt="Placeholder image"
									layout="fill"
								/>
							</figure>
							<div className="content">
								Lorem ipsum dolor sit amet,
							</div>
						</div>
					</div>
				</div>

				<div className="column is-one-third">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image
									src="/assets/images/services.jpg"
									alt="Placeholder image"
									layout="fill"
								/>
							</figure>
							<div className="content">
								Lorem ipsum dolor sit amet,
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Services;
