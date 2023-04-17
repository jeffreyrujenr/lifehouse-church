import Head from 'next/head';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

type Props = {};

export default function Home() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Lifehouse Church</title>
				<meta
					name='description'
					content='Lifehouse Church website'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main className='page'>
				<Image
					className='border-2 border-white rounded my-2'
					src=''
					alt='Picture Banner'
					height={180}
					width={420}
				/>
				<h1 className='text-3xl my-2'>Disciple & Send</h1>
				<p className='px-4'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
					assumenda modi consequuntur libero magnam, tempora voluptatem possimus
					dolore qui fugiat necessitatibus ipsa vitae expedita. Impedit.
				</p>
				<div className='flex px-4 my-2'>
					<div className='w-2/3'>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
							assumenda modi consequuntur libero magnam, tempora voluptatem
							possimus dolore qui fugiat necessitatibus ipsa vitae expedita.
							Impedit.
						</p>
						<button
							onClick={() => router.push('/about')}
							className='px-3 py-1 m-4 rounded border-2 border-white'>
							About
						</button>
					</div>
					<Image
						className='border-2 border-white rounded ml-4'
						src=''
						alt='Image'
						height={144}
						width={256}
					/>
				</div>
				<div className='flex justify-evenly items-center w-full'>
					<Image
						className='border-2 border-white rounded my-4 mx-2'
						src=''
						alt='Gallery Image 1'
						height={144}
						width={256}
					/>
					<Image
						className='border-2 border-white rounded my-4 mx-2'
						src=''
						alt='Gallery Image 1'
						height={144}
						width={256}
					/>
					<Image
						className='border-2 border-white rounded my-4 mx-2'
						src=''
						alt='Gallery Image 1'
						height={144}
						width={256}
					/>
				</div>
			</main>
		</>
	);
}
