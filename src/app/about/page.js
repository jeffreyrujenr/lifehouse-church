import thunder from 'next/font/local';

const thunderFont = thunder({
	src: '../../fonts/thunder/Thunder-BoldLC.woff2',
});

const page = () => {
	return (
		<div className='page'>
			about
			{/* <h1 className={`${thunderFont.className} text-3xl tracking-widest py-4`}>
				LIFEHOUSE CHURCH
			</h1> */}
		</div>
	);
};

export default page;
