import Navbar from '@/app/(root)/_components/navbar';

import type React from 'react';
import Footer from './_components/footer/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className=''>
			<Navbar title='Docs' />
			<div className='h-screen w-full mt-16'>{children}</div>
		</main>
	);
}
