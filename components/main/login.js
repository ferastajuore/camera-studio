import { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const login = () => {
	const handleLogin = () => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleLogin} className="form-controle">
			<div className="field">
				<label htmlFor="email" className="label">
					البريد الالكتروني
				</label>
				<p className="control has-icons-left">
					<input
						className="input is-large"
						id="email"
						type="email"
						placeholder="Email"
					/>
					<span className="icon is-left">
						<FaUserAlt />
					</span>
				</p>
			</div>

			<div className="field">
				<label htmlFor="password" className="label">
					الرمز السري
				</label>
				<p className="control has-icons-left">
					<input
						className="input is-large"
						id="password"
						type="password"
						placeholder="Password"
					/>
					<span className="icon is-left">
						<FaLock />
					</span>
				</p>
			</div>

			<div className="field-button">
				<button className="btn btn-small btn--info">
					تسجيل الدخول
				</button>
				<button className="btn btn-small btn--info">
					<Link href="/singUp">تسجيل جديد</Link>
				</button>
			</div>
		</form>
	);
};

export default login;
