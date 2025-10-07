'use client';
import { Copy } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
type PackageManager = 'npm' | 'yarn' | 'pnpm';

export default function InstallTabs({
	packageName = 'reactfine-ui lucide-react tailwindcss',
}) {
	const [activeTab, setActiveTab] = React.useState<PackageManager>('npm');
	const [copied, setCopied] = React.useState(false);

	const commands: Record<PackageManager, string> = {
		npm: `npm install ${packageName}`,
		yarn: `yarn add ${packageName}`,
		pnpm: `pnpm add ${packageName}`,
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(commands[activeTab]);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const tabs = [
		{
			id: 'npm',
			label: 'npm',
			icon: <Image src='/npm.svg' alt='npm' width={16} height={16} />,
		},
		{
			id: 'yarn',
			label: 'Yarn',
			icon: <Image src='/yarn.png' alt='Yarn' width={17} height={17} />,
		},
		{
			id: 'pnpm',
			label: 'pnpm',
			icon: <Image src='/pnpm.png' alt='pnpm' width={16} height={16} />,
		},
	];

	return (
		<div className='w-full max-w-4xl '>
			{/* Tab Headers */}
			<div className='flex justify-between overflow-hidden border border-gray-300 rounded-t-lg'>
				<div className='flex justify-between  bg-white '>
					{tabs.map(tab => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id as PackageManager)}
							className={`flex items-center justify-center gap-1 px-5 py-3 text-sm font-medium transition-all relative ${
								activeTab === tab.id
									? 'text-blue-600 !bg-[#EFF6FF]'
									: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
							}`}
						>
							<span className='text-base'>{tab.icon}</span>
							<span>{tab.label}</span>
							{activeTab === tab.id && (
								<div className='absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600' />
							)}
						</button>
					))}
				</div>
				<button
					onClick={handleCopy}
					className='ml-4 px-4 py-2 bg-gray-800 dark:text-white hover:bg-gray-700 rounded-md text-sm font-medium transition-colors flex items-center gap-2'
				>
					{copied ? (
						<>
							<span>✓</span>
							<span>Copied!</span>
						</>
					) : (
						<>
							<Copy size={20} />
							<span className='text-sm'>Copy</span>
						</>
					)}
				</button>
			</div>

			{/* Command Box */}
			<div className='relative bg-gray-900 rounded-b-lg p-6'>
				<div className='flex items-center justify-between'>
					<code className='text-gray-100 font-mono text-base flex-1'>
						{commands[activeTab]}
					</code>
				</div>
			</div>
		</div>
	);
}
