import React from 'react';

import { useRouter } from 'next/router';

type Props = {};

const Campuses = (props: Props) => {
	const router = useRouter();

	return (
		<div>
			campuses
			<h3>Join our Sunday Services</h3>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/bangalore')}>
				Bangalore
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/chennai')}>
				Chennai
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/trichy')}>
				Trichy
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/tirunelveli')}>
				Tirunelveli
			</p>
		</div>
	);
};

export default Campuses;
