import CodeBlock from '@/components/shared/CodeBlock';
import PropsTable from '@/components/shared/PropsTable';
import Image from 'next/image';
import React from 'react';
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from 'reactfine-ui';

export default function CardPage() {
	const propsData = [
		{
			prop: 'shadow',
			type: 'string',
			default: 'sm',
			description: 'Button style variant',
		},
		{
			prop: 'width',
			type: 'string',
			default: 'xs',
			description: 'Card width (small, default, large, icon)',
		},
		{
			prop: 'border',
			type: 'boolean',
			default: 'true',
			description: 'Disable button interaction',
		},
		{
			prop: 'hoverable',
			type: 'boolean',
			default: 'false',
			description: 'Card hover effect',
		},
		{
			prop: 'rounded',
			type: 'string',
			default: 'md',
			description: 'Card rounded (sm, default, lg, full)',
		},
		{
			prop: 'align',
			type: 'string',
			default: 'left',
			description: 'CardFooter item Position (left, center, right)',
		},
		{
			prop: 'as',
			type: 'string',
			default: 'h3',
			description: 'CardTitle as element (h1, h2, h3, h4, h5, h6)',
		},
	];
	return (
		<div className=''>
			<div>
				<p className='text-2xl font-semibold pb-3'>Card</p>
				<p className='text-[#4b5563] dark:text-gray-300 text-base'>
					A versatile card component with a variety of styles and options for
					different use cases.
				</p>
			</div>
			<div className='py-5'>
				<h4 className='text-xl font-semibold'>Preview</h4>
				<div className='py-4'>
					<Card
						rounded='md'
						width='sm'
						className='max-w-4xl flex justify-center gap-5 p-5 py-6'
					>
						<Card shadow='md' hoverable rounded='lg'>
							<CardHeader>
								<CardTitle>Card Title</CardTitle>
								<CardDescription>Bio</CardDescription>
							</CardHeader>

							<CardContent>
								<CardDescription>
									Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm yoki
									button bo{`'`}lishi mumkin. Bu yerda card ichidagi kontent bo
									{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
								</CardDescription>
							</CardContent>

							<CardFooter>
								<Button>Batafsil</Button>
							</CardFooter>
						</Card>
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title={'Card.jsx'}
						code={`import {
	Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from 'reactfine-ui';

function App() {
  return ( 
     <Card shadow='md' hoverable rounded='lg'>
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
			<CardDescription>Bio</CardDescription>
		</CardHeader>
		<CardContent>
			<CardDescription>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan.
			</CardDescription>
		</CardContent>
	  <CardFooter>
		  <Button>Batafsil</Button>
	  </CardFooter>
	</Card>
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
						<h4 className='text-xl dark:text-black font-medium'>Start</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Card shadow='md' hoverable rounded='lg' className='text-start'>
								<CardHeader>
									<CardTitle>Card Title</CardTitle>
									<CardDescription>Bio</CardDescription>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter align='left'>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>
					</Card>
				</div>
				<div className='py-7'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium dark:text-black'>Center</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Card shadow='md' hoverable rounded='lg' className='text-center'>
								<CardHeader>
									<CardTitle>Card Title</CardTitle>
									<CardDescription>Bio</CardDescription>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter align='center'>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>
					</Card>
				</div>
				<div>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium dark:text-black'>End</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Card shadow='md' hoverable rounded='lg' className='text-end'>
								<CardHeader>
									<CardTitle>Card Title</CardTitle>
									<CardDescription>Bio</CardDescription>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter align='right'>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>
					</Card>
				</div>
				<div className='py-7'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium dark:text-black'>Card Image</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Card shadow='md' hoverable rounded='lg'>
								<CardHeader className='h-48 relative'>
									<Image
										fill
										src='/card.svg'
										className='w-auto h-auto rounded-t-md'
										alt='Card Image'
									/>
								</CardHeader>
								<CardContent>
									<CardTitle>Card Title</CardTitle>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>
					</Card>
				</div>
				<div className='pb-7'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium dark:text-black'>Card Size</h4>
						<div className='p-3 grid gap-4 pl-0 items-center'>
							<Card shadow='md' width='xs' hoverable rounded='lg'>
								<CardHeader className='h-48 relative'>
									<Image
										fill
										src='/card.svg'
										className='w-auto h-auto rounded-t-md'
										alt='Card Image'
									/>
								</CardHeader>
								<CardContent>
									<CardTitle>XS</CardTitle>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
							<Card shadow='md' width='sm' hoverable rounded='lg'>
								<CardHeader className='h-48 relative'>
									<Image
										fill
										src='/card.svg'
										className='w-auto h-auto rounded-t-md'
										alt='Card Image'
									/>
								</CardHeader>
								<CardContent>
									<CardTitle>SM</CardTitle>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
							<Card shadow='md' width='md' hoverable rounded='lg'>
								<CardHeader className='h-48 relative'>
									<Image
										fill
										src='/card.svg'
										className='w-auto h-auto rounded-t-md'
										alt='Card Image'
									/>
								</CardHeader>
								<CardContent>
									<CardTitle>MD</CardTitle>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
							<Card shadow='md' width='lg' hoverable rounded='lg'>
								<CardHeader className='h-48 relative'>
									<Image
										fill
										src='/card.svg'
										className='w-auto h-52 rounded-t-md'
										alt='Card Image'
									/>
								</CardHeader>
								<CardContent>
									<CardTitle>LG</CardTitle>
									<CardDescription>
										Bu yerda card ichidagi kontent bo{`'`}ladi. U matn, rasm
										yoki button bo{`'`}lishi mumkin. Bu yerda card ichidagi
										kontent bo
										{`'`}ladi. U matn, rasm yoki button bo{`'`}lishi mumkin.
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
