'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

// Bo‘limlar
const getStartedLinks = [
	{ href: '/docs/introduction', label: 'Introduction' },
	{ href: '/docs/installation', label: 'Installation' },
];

const componentLinks = [
	{ href: '/docs/button', label: 'Button' },
	{ href: '/docs/card', label: 'Card' },
	{ href: '/docs/modal', label: 'Modal' },
	{ href: '/docs/input', label: 'Input' },
	{ href: '/docs/accordion', label: 'Accordion' },
	{ href: '/docs/avatar', label: 'Avatar' },
	{ href: '/docs/badge', label: 'Badge' },
];

export default function Sidebar() {
	const [mobileOpen] = useState(false);
	const pathname = usePathname();
	const [collapsed] = useState(false);

	return (
		<div
			className={clsx(
				'fixed top-16 left-0 h-full border-r text-black dark:text-gray-100 z-50',
				'flex flex-col justify-between',
				collapsed ? 'w-16' : 'w-64',
				'md:static md:translate-x-0',
				mobileOpen ? 'translate-x-0' : '-translate-x-full',
				'md:flex md:translate-x-0',
				// BG va border
				'text-foreground dark:bg-black border-border dark:!text-white'
			)}
		>
			{/* Yuqori qism */}
			<div className='p-4'>
				{/* Get started heading */}
				<p className='text-xs mb-2 text-gray-600 dark:text-gray-400 font-medium'>
					Getting started
				</p>
				<div className='space-y-1 mb-6'>
					{getStartedLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={clsx(
								'block px-3 py-2 rounded text-sm transition font-medium',
								pathname === href
									? 'bg-slate-200 text-blue-500 dark:bg-gray-800 dark:text-blue-400'
									: 'hover:bg-slate-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
							)}
						>
							{label}
						</Link>
					))}
				</div>

				{/* Components heading */}
				<p className='text-xs mb-2 text-gray-600 dark:text-gray-400 font-medium'>
					Components
				</p>
				<div className='space-y-1'>
					{componentLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={clsx(
								'block px-3 py-2 rounded text-sm transition font-medium',
								pathname === href
									? 'bg-slate-200 text-blue-500 dark:bg-gray-800 dark:text-blue-400'
									: 'hover:bg-slate-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
							)}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
