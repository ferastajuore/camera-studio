import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdDarkMode } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import { Avatar } from '@chakra-ui/react';

const NavbarAdmin = () => {
	const [isAcitve, setIsAcitve] = useState(false);

	return (
		<>
			<header className="header-admin">
				<div className="navbar-menu">
					<div className="sidebar-taggle">
						<GoThreeBars
							size="40"
							color="#FFF"
							style={{ cursor: 'pointer' }}
						/>
					</div>
					<nav className="user-nav">
						<button className="user-nav__box">
							<MdDarkMode />
						</button>
						<button className="user-nav__box">
							<BsFillBellFill />
						</button>
						<div className="user-nav__info">
							<button
								className="button-toggle"
								onClick={() => setIsAcitve(!isAcitve)}
							>
								<Avatar
									className="user-avata"
									size="lg"
									name="Segun Adebayo"
									src="https://bit.ly/sage-adebayo"
								/>
								<h4>Feras Ariabi</h4>
							</button>
							<div
								className={`dorpdown ${
									isAcitve ? 'is-active' : ''
								}`}
							>
								<ul className="dorpdown-list">
									<li className="dorpdown-item">
										ملف الشخصي
									</li>
									<li className="dorpdown-item">الاعدادات</li>
									<li className="dorpdown-item">الخروج</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavbarAdmin;
