import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { useLayoutEffect, useState } from 'react';
import MobileNavbar from '@/components/MobileNavbar';

export default function App({ Component, pageProps }: AppProps) {
	const [windowWidth, setWindowWidth] = useState(0);

	useLayoutEffect(() => {
		setWindowWidth(window.innerWidth);
	}, [windowWidth]);

	return (
		<>
			{windowWidth >= 768 ? <Navbar /> : <MobileNavbar />}
			<Component
				{...pageProps}
				props={windowWidth}
			/>
		</>
	);
}
