import Navbar from '@/app/(root)/_components/navbar';
import Sidebar from '@/components/shared/Sidebar';
import type React from 'react';
import Footer from '../(root)/_components/footer/footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Reactfine UI - Docs',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const footerContent = (
		<div className='text-base flex items-center gap-2 font-bold text-[#111827] dark:text-white z-10'>
			<div className='w-6 h-6 relative'>
				<Image fill src='/logo.png' alt='Logo' className='object-contain' />
			</div>
			<p className='dark:text-white'>ReactfineUI</p>
		</div>
	);
	return (
		<div className='h-screen overflow-x-hidden relative flex !flex-col md:flex-row w-full text-white'>
			{' '}
			<div className='fixed top-0 left-0 w-full z-50'>
				{' '}
				<Navbar title='Docs' />{' '}
			</div>{' '}
			<div className='flex flex-1 mt-16'>
				{' '}
				{/* Sidebar */}{' '}
				<div className='hidden max-lg:block xl:block lg:hidden md:hidden max-md:hidden md:w-64 '>
					{' '}
					<Sidebar />{' '}
				</div>{' '}
				{/* Main Content */}{' '}
				<div className='flex justify-center items-center bg-background my-auto w-full px-4 py-8'>
					{' '}
					<div className='w-full h-auto max-w-5xl px-6 rounded-md dark:!text-white text-[#111827]'>
						{' '}
						{children}{' '}
					</div>{' '}
				</div>{' '}
			</div>
			<div className='z-50 w-full'>
				<Footer content={footerContent} />
			</div>
		</div>
	);
}
