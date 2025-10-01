import Navbar from '@/app/(root)/_components/navbar';
import Sidebar from '@/components/shared/Sidebar';
import type React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-screen relative flex flex-col md:flex-row w-full text-white'>
			<div className='fixed top-0 left-0 w-full z-50'>
				<Navbar title='Docs' />
			</div>

			<div className='flex flex-1 mt-16'>
				{/* Sidebar */}
				<div className='hidden md:block md:w-64 z-10'>
					<Sidebar />
				</div>

				{/* Main Content */}
				<div className='flex justify-center items-center my-auto w-full px-4 py-8'>
					<div className='w-full h-auto max-w-5xl p-6 rounded-md'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
