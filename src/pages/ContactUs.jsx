import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const Form = lazy(() => import('../components/ContactUs/Form'));

function ContactUs() {
	return (
		<>
			<Suspense>
				<Navigation />
			</Suspense>
			<Suspense>
				<Form />
			</Suspense>
			<Suspense>
				<Footer />
			</Suspense>
		</>
	);
}

export default ContactUs;
