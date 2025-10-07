import { Badge, Button, Card } from 'reactfine-ui';
import React from 'react';
import InstallTabs from '@/app/(root)/_components/installation-tabs/tabs';
import Image from 'next/image';

export default function Installation() {
	return (
		<div className='text-[#475569]'>
			<div className='max-w-4xl'>
				<p className='text-3xl text-[#0F172A] dark:text-white font-semibold pb-3'>
					Installation
				</p>
				<p className='dark:text-gray-300 text-base'>
					Get started with ReactUI by installing the package using your
					preferred package manager. The library is designed to work <br />
					seamlessly with React applications and provides a comprehensive set of
					components for building modern user interfaces.
				</p>
			</div>

			<div className='py-5'>
				<div className='pt-4'>
					<InstallTabs />
				</div>
			</div>

			<div className='pb-5'>
				<div className='pt-4 dark:text-[#0F172A]'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-semibold text-[#0F172A]'>
							Peer Dependencies
						</h4>
						<div className='p-2 pl-0 flex flex-col gap-4 items-center'>
							<p>
								ReactUI requires the following peer dependencies to be installed
								in your project. Make sure your React version is compatible with
								the specified ranges.
							</p>
						</div>
						<Card
							rounded='lg'
							className='max-w-4xl bg-[#F8FAFC] flex items-center justify-between p-5 pl-6 py-6'
						>
							<div className='flex gap-4 !items-center'>
								<Button size='icon' className='!bg-[#DBEAFE]'>
									<Image src='/react.png' alt='React' width={16} height={16} />
								</Button>
								<div className='flex flex-col'>
									<p className='font-medium'>React</p>
									<p className='text-sm text-[#475569]'>Core React library</p>
								</div>
							</div>
							<div>
								<Badge rounded='full' className='bg-[#DCFCE7] text-[#166534]'>
									^18.0.0
								</Badge>
							</div>
						</Card>
						<Card
							rounded='lg'
							className='max-w-4xl bg-[#F8FAFC] flex items-center justify-between p-5 pl-6 py-6'
						>
							<div className='flex gap-4 !items-center'>
								<Button size='icon' className='!bg-[#F3E8FF]'>
									<Image
										src='/code.png'
										className='object-cover'
										alt='React'
										width={30}
										height={30}
									/>
								</Button>
								<div className='flex flex-col'>
									<p className='font-medium'>React DOM</p>
									<p className='text-sm text-[#475569]'>React DOM rendering</p>
								</div>
							</div>
							<div>
								<Badge rounded='full' className='bg-[#DCFCE7] text-[#166534]'>
									^18.0.0
								</Badge>
							</div>
						</Card>
						<Card
							rounded='lg'
							className='max-w-4xl bg-[#EFF6FF] flex items-center justify-start p-5 pl-6 py-6 w-full'
						>
							<div className='flex gap-4 w-full'>
								<Button size='icon' className='bg-transparent'>
									<Image
										src='/note.png'
										className='object-cover'
										alt='React'
										width={16}
										height={16}
									/>
								</Button>
								<div className='flex flex-col w-full'>
									<p className='font-medium'>React DOM</p>
									<p className='text-sm text-[#1E40AF]'>
										If you don{`'`}t have React and React DOM installed, you can
										install them alongside ReactUI:
									</p>
									<div className='mt-4 w-full'>
										<div className='bg-[#1E3A8A] rounded-md h-10 flex items-center max-w-xl pl-4 '>
											<p className='text-[#DBEAFE] text-sm flex flex-wrap gap-2'>
												<span>npm</span>
												<span> install</span>
												<span> react</span>
												<span> react-dom</span>
												<span> reactfine-ui</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</Card>
					</Card>
				</div>

				<div className='py-7 dark:text-[#0F172A]'>
					<Card
						rounded='lg'
						className='max-w-4xl bg-[#EFF6FF] flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium text-[#0F172A]'>Next Steps</h4>
						<div className='flex gap-4 pl-0 items-center'>
							<p className='text-base text-[#475569]'>
								Now that you have ReactfineUI installed, you{`'`}re ready to
								start building amazing user interfaces. Check out our quick
								start guide to learn how to use components in your application.
							</p>
						</div>
						<div className='flex flex-wrap gap-4'>
							<Button>
								<Image
									src='/rocket.png'
									alt='Browse Components'
									width={15}
									height={15}
								/>
								Quick Start
							</Button>
							<Button className='bg-transparent text-[#334155] border hover:bg-transparent border-[#CBD5E1]'>
								<Image
									src='/puzzle.png'
									alt='Browse Components'
									width={15}
									height={15}
								/>
								Browse Components
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
