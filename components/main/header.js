import React, { useState } from 'react';
import { BsFacebook, BsInstagram, BsSnapchat } from 'react-icons/bs';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Modal } from 'react-rainbow-components';

import Login from './login';

const Header = () => {
	const [isOpen, setisOpen] = useState(false);

	const handleOnClick = () => setisOpen({ isOpen: true });
	const handleOnClose = (close) => setisOpen(close);

	return (
		<section className="header">
			<video
				className="screenVideo"
				src="./assets/videos/video.mp4"
				autoPlay
				loop
				muted
			></video>
			<div className="overlay"></div>
			<div className="center">
				<div className="header-primary">
					<h1 className="heading-text">
						<span className="heading-text--main">Outdoors</span>
						<span className="heading-text--sub">
							is where life happens
						</span>
					</h1>
				</div>
				<div className="header-secondary">
					<ul className="header-social">
						<li>
							<a href="">
								<BsFacebook size="25px" />
							</a>
						</li>
						<li>
							<a href="">
								<BsInstagram size="25px" />
							</a>
						</li>
						<li>
							<a href="">
								<BsSnapchat size="25px" />
							</a>
						</li>
					</ul>
					<button
						onClick={() => handleOnClick()}
						className="btn btn--info header__btn-booking"
					>
						<HiOutlineArrowNarrowLeft size="17px" /> حجز الان
					</button>
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
		</section>
	);
};

export default Header;
