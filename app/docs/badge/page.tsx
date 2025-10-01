import { Badge, Button, Card } from 'reactfine-ui';
import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import PropsTable from '@/components/shared/PropsTable';
export default function BadgePage() {
	const propsData = [
		{
			prop: 'variant',
			type: 'string',
			default: 'primary',
			description: 'Button style variant',
		},
		{
			prop: 'size',
			type: 'string',
			default: 'md',
			description: 'Button size (small, default, large, icon)',
		},
		{
			prop: 'disabled',
			type: 'boolean',
			default: 'false',
			description: 'Disable button interaction',
		},
		{
			prop: 'loading',
			type: 'boolean',
			default: 'false',
			description: 'Show loading state',
		},
		{
			prop: 'rounded',
			type: 'string',
			default: 'md',
			description: 'Button rounded (sm, default, lg, full)',
		},
		{
			prop: 'className',
			type: 'string',
			default: '-',
			description: 'Custom CSS classes',
		},
		{
			prop: 'focus',
			type: 'string',
			default: 'primary',
			description:
				'Button focus (primary, secondary, danger, success, outline, dark)',
		},
	];
	return (
		<div className='text-black'>
			<div>
				<p className='text-2xl font-semibold pb-3'>Badge</p>
				<p className='text-[#4b5563]  text-base'>
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
						className='max-w-4xl flex items-center justify-center gap-4 p-5 py-6'
					>
						<Badge variant='primary'>Primary</Badge>
						<Badge variant='warning'>Warning</Badge>
						<Badge variant='outline'>Outline</Badge>
						<Badge variant='danger'>Danger</Badge>
						<Badge variant='success'>Succes</Badge>
						<Badge variant='dark'>Dark</Badge>
						<Button>Salom</Button>
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title={'Button.jsx'}
						code={`import { Button } from 'reactfine-ui';
function App() {
  return ( 
     <Button variant="primary">Button</Button>
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
				<div className='pt-4'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Sizes</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Button size='small'>Small</Button>
							<Button size='default'>Medium</Button>
							<Button size='large'>Large</Button>
							<Button size='icon'>Icon</Button>
						</div>
					</Card>
				</div>
				<div className='py-7'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>States</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Button>Normal</Button>
							<Button disabled={true}>Disabled</Button>
							<Button loading>Loading</Button>
						</div>
					</Card>
				</div>
				<div>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Rounded</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Button rounded='sm'>sm</Button>
							<Button rounded='default'>md</Button>
							<Button rounded='lg'>lg</Button>
							<Button rounded='full'>Full</Button>
						</div>
					</Card>
				</div>
				<div className='py-7'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Custom Style</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Button
								focus='success'
								className='!bg-green-500 text-white hover:bg-pink-600'
							>
								Custom Style
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
