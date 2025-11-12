import { Button, Card, Input } from 'reactfine-ui';
import React from 'react';
import Image from 'next/image';
import CodeBlockIntroduction from './code';

export default function Introduction() {
	return (
		<div className='text-[#475569] w-full px-4 sm:px-6 lg:px-8'>
			{/* Header Section */}
			<div className='max-w-4xl w-full mx-auto'>
				<div className='flex gap-3 items-center'>
					<Image src='/greenrocket.png' alt='Logo' width={40} height={40} />
					<p className='text-2xl sm:text-3xl text-[#0F172A] dark:text-white font-semibold pb-3'>
						Introduction
					</p>
				</div>
				<p className='dark:text-gray-300 !mt-2 text-lg sm:text-base leading-relaxed'>
					Get up and running with ReactfineUI in minutes. Follow this guide to
					install and configure the library <br /> in your React application.
				</p>
			</div>

			{/* Install Code */}
			<div className='py-6 w-full flex justify-center'>
				<div className='w-full max-w-4xl'>
					<div className='flex gap-3 items-center mb-5'>
						<Image
							src='/install.png'
							alt='Installation'
							width={18}
							height={18}
						/>
						<p className='text-lg font-semibold text-[#111827]'>Installation</p>
					</div>
					<CodeBlockIntroduction
						title='Install with npm'
						code={`npm install reactfine-ui lucide-react tailwindcss`}
					/>
					<div className='pt-8'>
						<div className='flex gap-3 !items-center'>
							<Image src='/code.png' alt='Logo' width={35} height={35} />
							<p className='text-[#111827] text-xl font-semibold'>Import CSS</p>
						</div>
						<p className='dark:text-gray-300 text-base pb-4 pt-1'>
							Import the components you need:
						</p>
						<CodeBlockIntroduction
							title='Component'
							code={`import 'reactfine-ui/dist/index.css';`}
						/>
					</div>
				</div>
			</div>

			{/* Basic Usage Section */}
			<div className='pb-10 flex justify-center'>
				<div className='w-full max-w-4xl dark:text-[#0F172A]'>
					<div className='flex gap-3 items-center mb-5 mt-2'>
						<Image
							src='/bluecode.png'
							alt='Installation'
							width={20}
							height={20}
						/>
						<h4 className='text-lg sm:text-xl font-semibold text-[#0F172A]'>
							Basic Usage
						</h4>
					</div>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col gap-5 p-4 sm:p-6 bg-white dark:bg-[#1E293B]'
					>
						<p className='text-base'>
							Here{`'`}s a simple example of how to use ReactUI components in
							your application:
						</p>

						<CodeBlockIntroduction
							title='Component'
							code={`import { Button, Card, Input } from 'reactfine-ui'

export default function HomePage() {
  return (
    <Card width='lg' className="p-6">
      <h1 className="text-2xl mb-4">Welcome</h1>
      <Input placeholder="Enter your name" />
      <Button variant="primary" className="!mt-4">
        Get Started
      </Button>
    </Card>
  )
}`}
						/>

						{/* Preview */}
						<Card
							rounded='lg'
							className='max-w-4xl bg-[#F9FAFB] flex flex-col gap-5 p-4 sm:p-6'
						>
							<p className='text-[#111827] text-sm sm:text-base font-medium'>
								Preview:
							</p>
							<Card width='lg' className='p-4 sm:p-6'>
								<h1 className='text-xl sm:text-2xl font-semibold text-[#111827] mb-4'>
									Welcome
								</h1>
								<Input className='w-full' placeholder='Enter your name' />
								<Button variant='primary' className='!mt-4 w-full sm:w-auto'>
									Get Started
								</Button>
							</Card>
						</Card>
					</Card>
				</div>
			</div>

			{/* Features Section */}
			<div className='w-full flex flex-col gap-6 items-center'>
				{/* React Card */}
				<Card className='w-full max-w-4xl bg-[#F8FAFC] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5'>
					<Button className='!bg-[#FEF9C4]' size='icon'>
						<Image src='/star.png' alt='React' width={30} height={30} />
					</Button>
					<div className='flex flex-col'>
						<p className='font-medium text-[#0F172A]'>React</p>
						<p className='text-sm sm:text-base text-[#475569]'>
							Customize the default theme by extending the Tailwind
							configuration. You can override colors, fonts, and spacing to
							match your brand.
						</p>
					</div>
				</Card>

				{/* Performance Card */}
				<Card className='w-full max-w-4xl bg-[#F8FAFC] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5'>
					<Button size='icon' className='!bg-[#DDFCE4]'>
						<Image
							src='/light.png'
							className='object-cover'
							alt='Performance'
							width={30}
							height={30}
						/>
					</Button>
					<div className='flex flex-col'>
						<p className='font-medium text-[#0F172A]'>Performance</p>
						<p className='text-sm sm:text-base text-[#475569]'>
							ReactUI components are optimized for performance with built-in
							memoization and lazy loading for better user experience.
						</p>
					</div>
				</Card>

				{/* Accessibility Card */}
				<Card className='w-full max-w-4xl bg-[#EFF6FF] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5'>
					<Button size='icon' className='!bg-[#F3E8FF]'>
						<Image
							src='/accessibility.png'
							className='object-cover'
							alt='Accessibility'
							width={30}
							height={30}
						/>
					</Button>
					<div className='flex flex-col'>
						<p className='font-medium text-[#0F172A]'>Accessibility</p>
						<p className='text-sm sm:text-base text-[#475569]'>
							All components follow WCAG guidelines and include proper ARIA
							attributes for screen readers and keyboard navigation.
						</p>
					</div>
				</Card>
			</div>

			{/* Next Steps Section */}
			<div className='py-10 flex justify-center'>
				<Card
					rounded='lg'
					className='w-full max-w-4xl bg-[#EFF6FF] flex flex-col gap-5 p-4 sm:p-6'
				>
					<h4 className='text-lg sm:text-xl font-semibold text-[#0F172A]'>
						Next Steps
					</h4>
					<p className='text-sm sm:text-base text-[#475569] leading-relaxed'>
						Now that you have ReactUI installed, you{`'`}re ready to start
						building amazing user interfaces. Check out our quick start guide to
						learn how to use components in your application.
					</p>

					<div className='flex flex-wrap gap-3 sm:gap-4'>
						<Button className='flex items-center gap-2'>
							<Image
								src='/puzzlewehite.png'
								alt='Browse Components'
								width={15}
								height={15}
							/>
							Browse Components
						</Button>

						<Button className='bg-white hover:bg-transparent text-[#374151] flex items-center gap-2'>
							<Image
								src='/book.png'
								alt='View Examples'
								width={15}
								height={15}
							/>
							View Examples
						</Button>

						<Button className='bg-white hover:bg-transparent text-[#374151] flex items-center gap-2'>
							<Image
								src='/codetwo.png'
								alt='API Reference'
								width={15}
								height={15}
							/>
							API Reference
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
}
