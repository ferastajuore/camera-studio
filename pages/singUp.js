import React from 'react';
import { Navbar, Footer } from '../components/layout';
import SingUp from '../components/main/singUp';

const singUp = () => {
	return (
		<>
			<Navbar />
			<SingUp />
			<Footer />
		</>
	);
};

export default singUp;
