import { SidebarProps } from '@/types';
import DarkModeToggle from './darkmode/darkmode';
import Image from 'next/image';
import Link from 'next/link';

function Navbar({ title }: SidebarProps) {
	return (
		<>
			<div className='w-full h-16 flex fixed bg-white top-0 items-center'>
				<div className='flex items-center w-full h-full px-24 dark:bg-black dark:text-white text-black border-b border-b-[#E5E7EB] dark:!border-gray-700 justify-between'>
					<div className='text-xl flex items-center gap-1 font-bold dark:text-white relative'>
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
					<div className='flex items-center gap-6'>
						<Link
							href={
								'https://github.com/akmaljonmuhammadjon0v/reactfine-ui-component'
							}
							target='_blank'
							className=''
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
			</div>
		</>
	);
}

export default Navbar;
