'use client';

import Link from 'next/link';

const page = () => {
	return (
		<div className='page'>
			<h3>Join our Sunday Services</h3>
			<Link href='/campuses/bangalore'>Bangalore</Link>
			<Link href='/campuses/chennai'>Chennai</Link>
			<Link href='/campuses/trichy'>Trichy</Link>
			<Link href='/campuses/tirunelveli'>Tirunelveli</Link>
			<Link href='/campuses/london'>London</Link>
		</div>
	);
};

export default page;
