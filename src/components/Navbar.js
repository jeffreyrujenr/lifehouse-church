import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import thunder from 'next/font/local';

type Props = {};

const thunderFont = thunder({ src: '../fonts/thunder/Thunder-BoldLC.woff2' });

const Navbar = (props: Props) => {
	const router = useRouter();

	const [toggled, setToggled] = useState(false);

	return (
		<nav className='navbar max-w-[90%] mx-auto h-[10vh]'>
			<div className='navbar-start w-[15%]'>
				<Image
					className='cursor-pointer'
					src='/../public/lifehouse-logo.png'
					alt=''
					height={32}
					width={32}
					onClick={() => router.push('/')}
				/>
				<Link
					href='/'
					className={`${thunderFont.className} text-xl tracking-widest ml-2 cursor-pointer`}>
					LIFEHOUSE CHURCH
				</Link>
			</div>
			<ul className='navbar-center w-[70%] mx-auto flex justify-evenly items-center'>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='/'>
					Home
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='about'>
					About
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='campuses'>
					Campuses
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='events'>
					Events
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='sermons'>
					Sermons
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='give'>
					Give
				</Link>
				<Link
					className='btn btn-ghost rounded'
					onClick={() => setToggled(false)}
					href='contact'>
					Contact
				</Link>
			</ul>
			<div className='navbar-end w-[10%]'>
				<div className='avatar w-10 h-10 cursor-pointer'>
					<Image
						className='rounded-full'
						src='/../public/avatar.jpg'
						height={16}
						width={16}
						alt='avatar'
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
