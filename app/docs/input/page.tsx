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
		<div className='px-4 sm:px-6 md:px-10 lg:px-20'>
			{/* Header */}
			<div>
				<p className='text-2xl md:text-3xl font-semibold pb-3'>Input</p>
				<p className='text-[#4b5563] dark:text-gray-300 text-sm md:text-base max-w-2xl'>
					A versatile input component with various styles and options for
					different use cases.
				</p>
			</div>

			{/* Preview */}
			<div className='py-6'>
				<h4 className='text-xl font-semibold'>Preview</h4>
				<div className='py-4'>
					<Card
						rounded='md'
						width='md'
						className='w-full max-w-4xl flex flex-wrap justify-center gap-4 p-4 sm:p-6'
					>
						<Input
							placeholder='Search...'
							size='md'
							className='w-full sm:w-1/2 md:w-1/3'
						/>
					</Card>
				</div>
			</div>

			{/* Usage */}
			<div className='pb-6'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title='Input.jsx'
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

			{/* Props Table */}
			<div className='py-6'>
				<h4 className='text-xl font-semibold'>Props</h4>
				<div className='pt-4 overflow-x-auto'>
					<PropsTable propsData={propsData} />
				</div>
			</div>

			{/* Examples */}
			<div className='py-6'>
				<h4 className='text-xl font-semibold'>Examples</h4>

				{/* Sizes */}
				<div className='py-4 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Sizes</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								placeholder='Size SM'
								type='email'
								size='sm'
								className='w-full sm:w-[48%] md:w-[30%]'
							/>
							<Input
								placeholder='Size MD'
								type='email'
								size='md'
								className='w-full sm:w-[48%] md:w-[30%]'
							/>
							<Input
								placeholder='Size LG'
								type='email'
								size='lg'
								className='w-full sm:w-[48%] md:w-[30%]'
							/>
						</div>
					</Card>
				</div>

				{/* Icon */}
				<div className='pt-4 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Icon</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								placeholder='you@example.com'
								label='Start Icon'
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
							<Input
								placeholder='you@example.com'
								label='End Icon'
								type='email'
								size='md'
								endIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
						</div>
					</Card>
				</div>

				{/* Label */}
				<div className='py-7 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Label</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								label='Email'
								placeholder='you@example.com'
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
						</div>
					</Card>
				</div>

				{/* Helper Text */}
				<div className='pb-7 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Helper Text</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								label='Email'
								placeholder='you@example.com'
								helperText='Yaxshi formatda kiriting'
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
						</div>
					</Card>
				</div>

				{/* Disabled */}
				<div className='pb-7 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Disabled</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								placeholder='you@example.com'
								type='email'
								size='md'
								disabled
								startIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
						</div>
					</Card>
				</div>

				{/* Validation */}
				<div className='pb-7 dark:text-black'>
					<Card className='w-full max-w-4xl flex flex-col gap-5 p-5 sm:p-6'>
						<h4 className='text-lg md:text-xl font-medium'>Validation</h4>
						<div className='flex flex-wrap gap-4'>
							<Input
								placeholder='you@example.com'
								helperText='Yaxshi formatda kiriting'
								error='Invalid email address'
								type='email'
								size='md'
								startIcon={<MailIcon className='w-4 h-4' />}
								className='w-full sm:w-[48%]'
							/>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
