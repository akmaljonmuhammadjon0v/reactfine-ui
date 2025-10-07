import { Card, Input } from 'reactfine-ui';
import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import PropsTable from '@/components/shared/PropsTable';
import { MailIcon } from 'lucide-react';
export default function InputPage() {
	const propsData = [
		{
			prop: 'label',
			type: 'string',
			default: '-',
			description: 'The label text displayed above the input',
		},
		{
			prop: 'startIcon',
			type: 'React.ReactNode',
			default: '-',
			description: 'The icon displayed at the start of the input',
		},
		{
			prop: 'endIcon',
			type: 'React.ReactNode',
			default: '-',
			description: 'The icon displayed at the end of the input',
		},
		{
			prop: 'type',
			type: 'string',
			default: `"text"`,
			description: 'The input type (text, email, password, etc.)',
		},
		{
			prop: 'placeholder',
			type: 'string',
			default: '-',
			description: 'Placeholder text shown when input is empty',
		},
		{
			prop: 'value',
			type: 'string',
			default: '-',
			description: 'The input value',
		},
		{
			prop: 'error',
			type: 'string',
			default: '-',
			description: 'Error message to display below the input',
		},
		{
			prop: 'disabled',
			type: 'boolean',
			default: 'false',
			description: 'Whether the input is disabled',
		},
		{
			prop: 'onChange',
			type: 'function',
			default: '-',
			description: 'Callback fired when the input value changes',
		},
		{
			prop: 'className',
			type: 'string',
			default: '-',
			description: 'Additional CSS classes to apply',
		},
	];
	return (
		<div className=''>
			<div>
				<p className='text-2xl font-semibold pb-3'>Input</p>
				<p className='text-[#4b5563] dark:text-gray-300 text-base'>
					A versatile input component with various styles and options for
					different use cases.
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
						<Input placeholder='Search...' size='md' />
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title={'Input.jsx'}
						code={`import { Input } from 'reactfine-ui';
function App() {
  return ( 
   <Input
	 label='Email'
	 placeholder='you@example.com'
	 helperText='Yaxshi formatda kiriting'
	 error=''
	 type='email'
	 size='md'
	 startIcon={<MailIcon className='w-4 h-4' />}
	/>
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
				<div className='py-4 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Sizes</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Input placeholder='Size SM' error='' type='email' size='sm' />
							<Input placeholder='Size MD' error='' type='email' size='md' />
							<Input placeholder='Size LG' error='' type='email' size='lg' />
						</div>
					</Card>
				</div>
				<div className='pt-4 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Icon</h4>
						<div className='p-3 pl-0 flex gap-4 items-center'>
							<Input
								placeholder='you@example.com'
								label='Start Icon'
								error=''
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
							/>
							<Input
								placeholder='you@example.com'
								label='End Icon'
								error=''
								type='email'
								size='md'
								endIcon={<MailIcon className='w-4 h-4' />}
							/>
						</div>
					</Card>
				</div>

				<div className='py-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Label</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Input
								label='Email'
								placeholder='you@example.com'
								error=''
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
							/>
						</div>
					</Card>
				</div>
				<div className='pb-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Helper Text</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Input
								label='Email'
								placeholder='you@example.com'
								helperText='Yaxshi formatda kiriting'
								error=''
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
							/>
						</div>
					</Card>
				</div>
				<div className='pb-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Disabled</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Input
								placeholder='you@example.com'
								type='email'
								size='md'
								disabled
								startIcon={<MailIcon className='w-4 h-4' />}
							/>
						</div>
					</Card>
				</div>
				<div className='pb-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Validation</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Input
								placeholder='you@example.com'
								helperText='Yaxshi formatda kiriting'
								error='Invalid email address'
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
							/>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
