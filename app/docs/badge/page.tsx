import { Badge, Card } from 'reactfine-ui';
import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import PropsTable from '@/components/shared/PropsTable';
export default function BadgePage() {
	const propsData = [
		{
			prop: 'variant',
			type: 'string',
			default: 'primary',
			description: 'Badge style variant',
		},
		{
			prop: 'size',
			type: 'string',
			default: 'default',
			description: 'Badge size (md, lg)',
		},
		{
			prop: 'rounded',
			type: 'string',
			default: 'md',
			description: 'Badge rounded (sm, md, lg, full)',
		},
		{
			prop: 'className',
			type: 'string',
			default: '-',
			description: 'Custom CSS classes',
		},
	];
	return (
		<div className=''>
			<div>
				<p className='text-2xl font-semibold pb-3'>Badge</p>
				<p className='text-[#4b5563] dark:text-gray-300 text-base'>
					A versatile badge component with multiple variants, sizes for user
					interactions.
				</p>
			</div>
			<div className='py-5'>
				<h4 className='text-xl font-semibold'>Preview</h4>
				<div className='py-4'>
					<Card
						rounded='md'
						width='md'
						className='max-w-4xl flex flex-wrap items-center justify-center gap-4 p-5 py-6'
					>
						<Badge variant='primary'>Primary</Badge>
						<Badge variant='secondary'>Secondary</Badge>
						<Badge variant='warning'>Warning</Badge>
						<Badge variant='outline'>Outline</Badge>
						<Badge variant='danger'>Danger</Badge>
						<Badge variant='success'>Succes</Badge>
						<Badge variant='dark'>Dark</Badge>
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title={'Badge.jsx'}
						code={`import { Badge } from 'reactfine-ui';
function App() {
  return ( 
     <Badge variant='primary'>Primary</Badge>
  );
}`}
					/>
				</div>
			</div>
			<div className='py-5'>
				<h4 className='text-xl font-semibold'>Props</h4>
				<div className='pt-4'>
					<PropsTable propsData={propsData} />
				</div>
			</div>
			<div className='py-5'>
				<h4 className='text-xl font-semibold'>Examples</h4>
				<div className='pt-4 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Sizes</h4>
						<div className='p-3 pl-0 flex gap-4 items-center'>
							<Badge size='md'>Medium</Badge>
							<Badge size='lg'>Large</Badge>
						</div>
					</Card>
				</div>

				<div className='py-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Rounded</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Badge rounded='sm'>SM</Badge>
							<Badge rounded='md'>MD</Badge>
							<Badge rounded='lg'>LG</Badge>
							<Badge rounded='full'>Full</Badge>
						</div>
					</Card>
				</div>
				<div className='pb-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Custom Style</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Badge className='!bg-green-500 text-white hover:bg-pink-600'>
								Custom Style
							</Badge>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
