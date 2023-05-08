import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import thunder from 'next/font/local';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {};

const thunderFont = thunder({ src: '../fonts/thunder/Thunder-BoldLC.woff2' });

const MobileNavbar = (props: Props) => {
	const router = useRouter();

	const [toggled, setToggled] = useState(false);

	return (
		<nav className='navbar max-w-[80%] mx-auto h-[10vh]'>
			<div className='navbar-start'>
				<Image
					className='cursor-pointer'
					src='/../public/lifehouse-logo.png'
					alt=''
					height={32}
					width={32}
					onClick={() => router.push('/')}
				/>
			</div>
			<div className='navbar-center'>
				<Link
					href='/'
					className={`${thunderFont.className} text-2xl tracking-widest py-4`}>
					LIFEHOUSE CHURCH
				</Link>
			</div>
			<div className='navbar-end'>
				{toggled ? (
					<XMarkIcon
						className='h-8 w-12 cursor-pointer btn btn-ghost btn-circle p-2'
						onClick={() => setToggled(!toggled)}
					/>
				) : (
					<Bars3Icon
						className='h-8 w-12 cursor-pointer btn btn-ghost btn-circle p-2'
						onClick={() => setToggled(!toggled)}
					/>
				)}
			</div>
			<div className='dropdown'>
				<ul className='menu menu-compact dropdown-content shadow rounded-box mt-[10vh] p-2 w-60 h-full absolute'>
					<Link
						onClick={() => setToggled(false)}
						href='/'>
						Home
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='about'>
						About
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='campuses'>
						Campuses
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='events'>
						Events
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='sermons'>
						Sermons
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='give'>
						Give
					</Link>
					<Link
						onClick={() => setToggled(false)}
						href='contact'>
						Contact
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default MobileNavbar;
