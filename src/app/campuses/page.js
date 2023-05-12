import { useRouter } from 'next/router';

const page = () => {
	const router = useRouter();

	return (
		<div className='page'>
			<h3>Join our Sunday Services</h3>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/campuses/bangalore')}>
				Bangalore
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/campuses/chennai')}>
				Chennai
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/campuses/trichy')}>
				Trichy
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/campuses/tirunelveli')}>
				Tirunelveli
			</p>
			<p
				className='cursor-pointer'
				onClick={() => router.push('/campuses/london')}>
				London
			</p>
		</div>
	);
};

export default page;
