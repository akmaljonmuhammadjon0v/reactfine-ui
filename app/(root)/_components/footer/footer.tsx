import Link from 'next/link';
import React from 'react';

function Footer({ content }: { content: React.ReactNode }) {
	return (
		<div>
			<footer className='dark:bg-black border-t border-t-[#E5E7EB] dark:border-gray-700'>
				<div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500  sm:flex-row sm:px-10 lg:px-16'>
					<div className='!dark:text-white'>{content}</div>
					<nav className='flex flex-wrap items-center gap-4 text-sm font-medium text-[#6B7280]'>
						<Link
							className='transition hover:text-slate-900'
							href='https://github.com/akmaljonmuhammadjon0v/reactfine-ui-component'
						>
							GitHub
						</Link>
						<a
							className='transition hover:text-slate-900'
							href='/docs/installation'
						>
							Documentation
						</a>
						<Link
							className='transition hover:text-slate-900'
							href='https://github.com/akmaljonmuhammadjon0v/reactfine-ui-component?tab=License-1-ov-file'
						>
							License
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
