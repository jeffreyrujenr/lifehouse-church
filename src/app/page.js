import Head from 'next/head';
import Image from 'next/image';
import thunder from 'next/font/local';

import { useRouter } from 'next/navigation';

const thunderFont = thunder({ src: '../fonts/thunder/Thunder-BoldLC.woff2' });

export default function Home() {
	const router = useRouter();

	return (
		<main
			className='hero min-h-[90vh]'
			style={{
				backgroundImage: `url("../background.jpg")`,
			}}>
			<div className='hero-overlay bg-opacity-75'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-xl'>
					<h1
						className={`${thunderFont.className} tracking-widest mb-5 text-5xl font-bold`}>
						LIFEHOUSE CHURCH
					</h1>
					<p className='mb-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
						tenetur impedit saepe iste. Placeat assumenda illum esse minima
						magnam dolores inventore maiores rerum vitae nemo?
					</p>
					<div className='flex justify-evenly items-center flex-wrap'>
						<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
							<Image
								src=''
								height={16}
								width={16}
								alt=''
							/>
							<h1 className='text-xl bold mb-2'>Bengaluru</h1>
							<p className='mb-1'>9:00 AM IST</p>
							<p className='mb-1'>11:00 AM IST</p>
						</div>
						<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
							<Image
								src=''
								height={16}
								width={16}
								alt=''
							/>
							<h1 className='text-xl bold mb-2'>Trichy</h1>
							<p className='mb-1'>10:30 AM IST</p>
						</div>
						<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
							<Image
								src=''
								height={16}
								width={16}
								alt=''
							/>
							<h1 className='text-xl bold mb-2'>Chennai</h1>
							<p className='mb-1'>10:30 AM IST</p>
						</div>
						<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
							<Image
								src=''
								height={16}
								width={16}
								alt=''
							/>
							<h1 className='text-xl bold mb-2'>Tirunelveli</h1>
							<p className='mb-1'>Coming soon</p>
						</div>
						<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
							<Image
								src=''
								height={16}
								width={16}
								alt=''
							/>
							<h1 className='text-xl bold mb-2'>London</h1>
							<p className='mb-1'>Coming soon</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
