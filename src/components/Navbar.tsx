import { Switch } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import thunder from 'next/font/local';

type Props = {};

const thunderFont = thunder({ src: '../fonts/thunder/Thunder-BoldLC.woff2' });

const Navbar = (props: Props) => {
	const router = useRouter();

	const [enabled, setEnabled] = useState(true);
	const [toggled, setToggled] = useState(false);

	return (
		<nav className='h-[10vh] flex flex-col justify-around items-center border-b-2'>
			<div className='w-full flex justify-evenly items-center'>
				<Image
					className='cursor-pointer'
					src='/../public/lifehouse-logo.png'
					alt=''
					height={32}
					width={32}
					onClick={() => router.push('/')}
				/>
				<h1
					className={`${thunderFont.className} text-2xl tracking-widest cursor-pointer`}
					onClick={() => router.push('/')}>
					LIFEHOUSE CHURCH
				</h1>
				<div className='flex justify-around items-center'>
					{toggled ? (
						<XMarkIcon
							className='h-8 w-8 cursor-pointer'
							onClick={() => setToggled(!toggled)}
						/>
					) : (
						<Bars3Icon
							className='h-8 w-8 cursor-pointer'
							onClick={() => setToggled(!toggled)}
						/>
					)}
				</div>
			</div>
			{toggled ? (
				<div className='absolute right-0 left-0 top-[10vh] flex flex-col justify-evenly items-center h-[90vh] bg-white dark:bg-black py-72'>
					<Link href='/'>Home</Link>
					<Link href='about'>About us</Link>
					<Link href='services'>Campuses</Link>
					<Link href='gallery'>Next steps</Link>
					<Link href='contact-us'>Give</Link>
				</div>
			) : null}
		</nav>
	);
};

export default Navbar;
