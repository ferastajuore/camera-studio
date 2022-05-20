import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import {
	BsFacebook,
	BsInstagram,
	BsWhatsapp,
	BsYoutube,
	BsFillSuitHeartFill,
} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			{/* <div className="footer-logo">
				<Image
					src="/assets/images/logo.png"
					alt="logo"
					width={150}
					height={150}
				/>
			</div> */}
			<div className="section is-medium">
				<div className="footer-contents">
					<ul className="footer-navbar">
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>الرئيسية</span>
							</a>
						</li>
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>من نحن</span>
							</a>
						</li>
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>خدماتنا</span>
							</a>
						</li>
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>انضم الينا</span>
							</a>
						</li>
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>تواصل معنا</span>
							</a>
						</li>
						<li>
							<a>
								<IoIosArrowDroprightCircle />
								<span>تسجيل الدخول</span>
							</a>
						</li>
					</ul>

					<ul className="footer-contact">
						<li>
							<span>0920000000</span>

							<span>
								<AiOutlinePhone />
							</span>
						</li>
						<li>
							<span>test@example.com</span>
							<span>
								<AiOutlineMail />
							</span>
						</li>
						<li>
							<span>طرابلس - ليبيا</span>
							<span>
								<ImLocation />
							</span>
						</li>
					</ul>

					<ul className="footer-social">
						<li>
							<Link href="/">
								<BsFacebook />
							</Link>
						</li>
						<li>
							<Link href="/">
								<BsInstagram />
							</Link>
						</li>
						<li>
							<Link href="/">
								<BsWhatsapp />
							</Link>
						</li>
						<li>
							<Link href="/">
								<BsYoutube />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="copyright">
				{/* <span> */}
				Copyright &copy; 2022 All rights reserved. | This website is
				made with <BsFillSuitHeartFill color="#d50000" /> by
				{/* </span> */}
				<span>
					<a>Tech Bridge</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
