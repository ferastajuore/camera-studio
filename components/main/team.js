import React from 'react';
import { Wrap, WrapItem, Avatar } from '@chakra-ui/react';
import { TextHeader } from '../UI';

const Team = () => {
	return (
		<section className="team section is-medium">
			<div className="header-text">
				<TextHeader>فريقنا</TextHeader>
			</div>
			{/* <div className="team-members columns is-multiline is-mobile"> */}
			<div className="team-members columns is-multiline is-mobile">
				<div className="member">
					<Wrap>
						<WrapItem>
							<Avatar
								className="member-avata"
								size="2xl"
								name="Segun Adebayo"
								src="https://bit.ly/sage-adebayo"
							/>
						</WrapItem>
					</Wrap>
					<div className="member">
						<h4 className="member-name">feras ariabi</h4>
						<p className="member-description">CO-FOUNDER & CTO</p>
					</div>
				</div>

				<div className="member">
					<Wrap>
						<WrapItem>
							<Avatar
								className="member-avata"
								size="2xl"
								name="Segun Adebayo"
								src="https://bit.ly/sage-adebayo"
							/>
						</WrapItem>
					</Wrap>
					<div className="member">
						<h4 className="member-name">ahmed abozied</h4>
						<p className="member-description">CO-FOUNDER & CTO</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
