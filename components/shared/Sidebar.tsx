'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

// Bo‘limlar
const getStartedLinks = [
	{ href: '/docs/introduction', label: 'Introduction' },
	{ href: '/docs/installation', label: 'Installation' },
	{ href: '/docs/theming', label: 'Theming' },
];

const componentLinks = [
	{ href: '/docs/button', label: 'Button' },
	{ href: '/docs/card', label: 'Card' },
	{ href: '/modal', label: 'Modal' },
	{ href: '/input', label: 'Input' },
	{ href: '/accordion', label: 'Accordion' },
	{ href: '/avatar', label: 'Avatar' },
	{ href: '/docs/badge', label: 'Badge' },

	// ... istagancha davom ettirishing mumkin
];

export default function Sidebar() {
	const [mobileOpen] = useState(false);
	const pathname = usePathname();
	const [collapsed] = useState(false);

	return (
		<div
			className={clsx(
				'fixed top-16 left-0 h-full bg-white border-r border-r-[#E5E7EB] text-black transition-all z-50',
				'flex flex-col justify-between',
				collapsed ? 'w-16' : 'w-64',
				'md:static md:translate-x-0',
				mobileOpen ? 'translate-x-0' : '-translate-x-full',
				'md:flex md:translate-x-0'
			)}
		>
			{/* Yuqori qism */}
			<div className='p-4'>
				{/* Get started heading */}
				<p className='text-xs mb-2 dark:text-gray-400 text-gray-600 font-medium'>
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
									? 'bg-slate-200 text-blue-500'
									: 'hover:bg-slate-300 text-gray-300'
							)}
						>
							{label}
						</Link>
					))}
				</div>

				{/* Components heading */}
				<p className='text-xs mb-2 dark:text-gray-400 text-gray-600 font-medium'>
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
									? 'bg-slate-200 text-blue-500'
									: 'hover:bg-slate-300 dark:hover:bg-secondary text-gray-300'
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
