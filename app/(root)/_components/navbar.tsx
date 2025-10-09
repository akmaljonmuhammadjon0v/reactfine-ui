'use client';

import { SidebarProps } from '@/types';
import DarkModeToggle from './darkmode/darkmode';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

function Navbar({ title }: SidebarProps) {
	const [open, setOpen] = useState(false);
	const componentLinks = [
		{ href: '/docs/introduction', label: 'Introduction' },
		{ href: '/docs/installation', label: 'Installation' },
		{ href: '/docs/button', label: 'Button' },
		{ href: '/docs/card', label: 'Card' },
		{ href: '/docs/modal', label: 'Modal' },
		{ href: '/docs/input', label: 'Input' },
		{ href: '/docs/accordion', label: 'Accordion' },
		{ href: '/docs/avatar', label: 'Avatar' },
		{ href: '/docs/badge', label: 'Badge' },
		{
			href: 'https://github.com/akmaljonmuhammadjon0v/reactfine-ui-component',
			label: 'Github',
		},
	];
	return (
		<>
			{/* Navbar */}
			<nav className='fixed top-0 left-0 w-full h-16 flex items-center bg-white dark:bg-black dark:text-white text-black border-b border-b-[#E5E7EB] dark:border-gray-700 z-40'>
				<div className='flex items-center justify-between w-full px-6 md:px-24'>
					{/* Hamburger Menu (mobil) */}
					<button
						onClick={() => setOpen(true)}
						className='md:hidden sm:flex max-sm:flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 dark:border-gray-700'
						aria-label='Open menu'
					>
						<Menu size={22} color='black' />
					</button>

					{/* Logo va Title */}
					<div className='text-xl flex items-center gap-2 font-bold'>
						<div className='relative w-6 h-6'>
							<Image
								fill
								src='/logo.png'
								alt='Logo'
								className='object-contain'
							/>
						</div>
						<p>{title}</p>
					</div>

					{/* O‘ng taraf (faqat desktop) */}
					<div className='hidden md:flex items-center gap-6'>
						<Link
							href='https://github.com/akmaljonmuhammadjon0v/reactfine-ui-component'
							target='_blank'
							aria-label='GitHub link'
						>
							<Image
								src='/github.svg'
								alt='GitHub'
								className='!block dark:!hidden object-cover'
								width={20}
								height={20}
							/>
							<Image
								src='/githubdark.svg'
								alt='GitHub'
								className='!hidden dark:!block object-cover'
								width={20}
								height={20}
							/>
						</Link>
						<DarkModeToggle />
					</div>
				</div>
			</nav>

			{/* Mobil menyu - chapdan chiqadigan panel */}
			{open && (
				<aside
					className={clsx(
						'fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#0D0D0D] shadow-lg transition-transform duration-300 md:hidden',
						open ? 'translate-x-0' : '-translate-x-full'
					)}
				>
					<div className='flex items-center justify-between border-b border-slate-200 dark:border-gray-700 px-5 py-4'>
						<h2 className='text-lg font-semibold text-slate-800 dark:text-white'>
							Menu
						</h2>
						<button
							onClick={() => setOpen(false)}
							className='rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
							aria-label='Close menu'
						>
							<X size={20} color='black' />
						</button>
					</div>

					<nav className='flex flex-col gap-4 p-4 text-slate-700 dark:text-gray-300'>
						{componentLinks.map(link => (
							<Link
								key={link.href}
								href={link.href}
								className='rounded-md px-3 py-0 hover:bg-gray-100 dark:hover:bg-gray-800'
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}

						<div className='flex items-center justify-between rounded-md px-3 mt-18 pt-4 !border-t border-slate-200 dark:border-gray-700'>
							<span>Theme</span>
							<DarkModeToggle />
						</div>
					</nav>
				</aside>
			)}

			{/* Qoraygan fon (backdrop) */}
			{open && (
				<div
					className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden'
					onClick={() => setOpen(false)}
				></div>
			)}
		</>
	);
}

export default Navbar;
