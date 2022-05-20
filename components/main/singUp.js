import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const singUp = () => {
	return (
		<section className="singUp section is-large">
			<div className="card">
				<div className="card-header card-header-color">
					<h2>تسجيل الدخول</h2>
				</div>
				<div className="card-body">
					<form
						className="form-controle form-rtl"
						style={{ direction: 'rtl' }}
					>
						<div className="row">
							<div className="field">
								<label htmlFor="firstName" className="label">
									اسم الاول
								</label>
								<p className="control has-icons-right">
									<input
										className="input is-large"
										id="firstName"
										type="text"
										placeholder="اسم الاول"
									/>
									<span className="icon is-right">
										<FaUserAlt />
									</span>
								</p>
							</div>

							<div className="field">
								<label htmlFor="lastName" className="label">
									لقب
								</label>
								<p className="control has-icons-right">
									<input
										className="input is-large"
										id="lastName"
										type="text"
										placeholder="لقب"
									/>
									<span className="icon is-right">
										<FaLock />
									</span>
								</p>
							</div>
						</div>
						<div className="field">
							<label htmlFor="city" className="label">
								المدينة
							</label>
							<div className="control has-icons-right">
								<div className="select is-large">
									<select id="city" defaultValue="0">
										<option selected>المدينة</option>
										<option>طرابلس</option>
										<option>مصراته</option>
									</select>
								</div>
								<span className="icon is-large is-right">
									<FaUserAlt />
								</span>
							</div>
						</div>

						<div className="field">
							<label htmlFor="area" className="label">
								المنطقة
							</label>
							<div className="control has-icons-right">
								<div className="select is-large">
									<select id="area" defaultValue="0">
										<option selected>المنطقة</option>
										<option>تاجوراء</option>
										<option>سوق الجمعة</option>
									</select>
								</div>
								<span className="icon is-large is-right">
									<FaUserAlt />
								</span>
							</div>
						</div>

						<div className="field">
							<label htmlFor="phoneNumber" className="label">
								رقم الهاتف
							</label>
							<p className="control has-icons-right">
								<input
									className="input is-large"
									id="phoneNumber"
									type="text"
									placeholder="رقم الهاتف"
								/>
								<span className="icon is-right">
									<FaLock />
								</span>
							</p>
						</div>

						<div className="field">
							<label htmlFor="email" className="label">
								البريد الالكتروني
							</label>
							<p className="control has-icons-right">
								<input
									className="input is-large"
									id="email"
									type="email"
									placeholder="Email"
								/>
								<span className="icon is-right">
									<FaUserAlt />
								</span>
							</p>
						</div>

						<div className="row">
							<div className="field">
								<label htmlFor="password" className="label">
									الرمز السري
								</label>
								<p className="control has-icons-right">
									<input
										className="input is-large"
										id="password"
										type="password"
										placeholder="Password"
									/>
									<span className="icon is-right">
										<FaLock />
									</span>
								</p>
							</div>

							<div className="field">
								<label htmlFor="password" className="label">
									تاكيد الرمز السري
								</label>
								<p className="control has-icons-right">
									<input
										className="input is-large"
										id="password"
										type="password"
										placeholder="Password"
									/>
									<span className="icon is-right">
										<FaLock />
									</span>
								</p>
							</div>
						</div>

						<div className="field-button">
							<button className="btn btn--info">تسجيل</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default singUp;
