import React from 'react';
import { NavbarAdmin, Sidebar } from '../../components/layout';

const Admin = ({ children }) => {
	return (
		<div className="admin">
			<NavbarAdmin />
			<div className="admin-content">
				<Sidebar />
				<main className="container">{children}</main>
			</div>
		</div>
	);
};

export default Admin;
