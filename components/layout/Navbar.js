import React, { useState } from 'react';
import Link from 'next/link';
import { Modal } from 'react-rainbow-components';

import Login from '../main/login';

const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);

	const handleOnClick = () => setisOpen({ isOpen: true });
	const handleOnClose = (close) => setisOpen(close);

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item">logo</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item lang">
						<Link href="/">الرئيسية</Link>
						<Link href="#services">خدماتنا</Link>
						<Link href="#about-us">من نحن</Link>
						<a>انضم الينا</a>
						<a>تواصل معنا</a>
						<button
							onClick={() => handleOnClick()}
							className="button is-outlined is-medium"
						>
							تسجيل
						</button>
					</div>
				</div>
			</div>

			<Modal
				id="modal-1"
				title="تسجيل الدخول"
				isOpen={isOpen}
				onRequestClose={() => handleOnClose(false)}
			>
				<Login />
			</Modal>
		</nav>
	);
};

export default Navbar;
