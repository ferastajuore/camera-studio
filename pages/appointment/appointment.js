import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { DatePicker } from 'react-rainbow-components';

import { Navbar, Footer } from '../../components/layout';

const appointment = () => {
	return (
		<>
			<Navbar />

			<section className="appointment section is-large">
				<div className="card">
					<div className="card-header card-header-color">
						<h2>حجز موعد</h2>
					</div>

					<div className="card-body">
						<form
							className="form-controle form-rtl"
							style={{ direction: 'rtl' }}
						>
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
								<label htmlFor="linkAddress" className="label">
									الموقع
								</label>
								<p className="control has-icons-right">
									<input
										className="input is-large"
										id="linkAddress"
										type="link"
										placeholder="https://"
									/>
									<span className="icon is-right">
										<FaLock />
									</span>
								</p>
							</div>

							<div className="field">
								<label htmlFor="services" className="label">
									الخدمات
								</label>
								<div className="control has-icons-right">
									<div className="select is-large">
										<select defaultValue="0">
											<option selected>الخدمات</option>
											<option>تصوير تابث</option>
											<option>تصوير سينيمائي</option>
										</select>
									</div>
									<span className="icon is-large is-right">
										<FaUserAlt />
									</span>
								</div>
							</div>

							<div className="field">
								<DatePicker
									// value={state.date}
									minDate={new Date(2022, 0, 4)}
									maxDate={new Date(2023, 0, 4)}
									label="موعد"
									formatStyle="large"
									labelAlignment="left"
									className="DatePicker"
									// style={styleDate}
									// onChange={(value) => setState({ date: value })}
								/>
							</div>

							<div className="field-button">
								<button className="btn btn--info">حجز</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default appointment;
