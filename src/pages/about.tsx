import React from 'react';

import thunder from 'next/font/local';

type Props = {};

const thunderFont = thunder({ src: '../fonts/thunder/Thunder-BoldLC.woff2' });

const About = (props: Props) => {
	return (
		<div>
			about
			<h1 className={`${thunderFont.className} text-3xl tracking-widest py-4`}>
				LIFEHOUSE CHURCH
			</h1>
		</div>
	);
};

export default About;
