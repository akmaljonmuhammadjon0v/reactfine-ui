'use client';
import {
	Button,
	Card,
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalImage,
	ModalTitle,
} from 'reactfine-ui';
import React, { useState } from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import PropsTable from '@/components/shared/PropsTable';
import { X } from 'lucide-react';
export default function ModalPage() {
	const [isOpen, setIsOpen] = useState(false);
	const propsData = [
		{
			prop: 'isOpen',
			type: 'boolean',
			default: 'false',
			description: 'Controls the open state of the modal',
		},
		{
			prop: 'onClose',
			type: 'void',
			default: '-',
			description: 'Badge size (md, lg)',
		},
		{
			prop: 'align',
			type: 'string',
			default: 'right',
			description: 'ModalFooter item Position (left, center, right)',
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
				<p className='text-2xl font-semibold pb-3'>Modal</p>
				<p className='text-[#4b5563] dark:text-gray-300 text-base'>
					A versatile modal component with various styles and options for
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
						<Card width='md' className='p-4 relative'>
							<ModalTitle>Modal Title</ModalTitle>
							<button className='absolute cursor-pointer top-3 right-3 text-zinc-500 hover:text-zinc-800'>
								<X size={20} />
							</button>
							<ModalContent>
								<ModalDescription>
									Bu tayyor modal komponenti. Siz unga istagan content
									qo‘shishingiz mumkin.
								</ModalDescription>
							</ModalContent>
							<ModalFooter>
								<Button variant='primary' onClick={() => setIsOpen(false)}>
									Yopish
								</Button>
							</ModalFooter>
						</Card>
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<h4 className='text-xl font-semibold'>Usage</h4>
				<div className='pt-4'>
					<CodeBlock
						title={'Modal.jsx'}
						code={`import React, { useState } from "react";
import { Button, Modal, ModalTitle, ModalDescription, ModalContent, ModalFooter 
} from "reactfine-ui";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalTitle>Welcome to My Modal 🎉</ModalTitle>
        <ModalContent>
          <ModalDescription>
            Bu tayyor modal komponenti. Siz unga istagan content qo‘shishingiz mumkin.
          </ModalDescription>
        </ModalContent>
        <ModalFooter align="right">
          <Button onClick={() => setIsOpen(false)} variant="outline">
            Cancel
          </Button>
          <Button onClick={() => alert("Tasdiqlandi!")}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
`}
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
						<h4 className='text-xl font-medium'>Modal</h4>
						<div className='p-3 flex gap-4 pl-0 items-center'>
							<Button onClick={() => setIsOpen(true)} variant='dark'>
								Click me
							</Button>
							<Modal
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
								className='p-4 relative'
							>
								<ModalTitle>Welcome to My Modal 🎉</ModalTitle>
								<ModalContent>
									<ModalImage src='/card.svg' alt='Random Image' />
									<ModalDescription>
										Bu tayyor modal komponenti. Siz unga istagan content
										qo‘shishingiz mumkin.
									</ModalDescription>
								</ModalContent>

								<ModalFooter align='right'>
									<Button
										onClick={() => setIsOpen(false)}
										variant='outline'
										className='mr-2'
									>
										Cancel
									</Button>
									<Button
										onClick={() => alert('Tasdiqlandi!')}
										className='bg-green-600 hover:bg-green-700 text-white'
									>
										Confirm
									</Button>
								</ModalFooter>
							</Modal>
						</div>
					</Card>
				</div>
				<div className='pt-7 dark:text-black'>
					<Card
						rounded='lg'
						className='max-w-4xl flex flex-col justify-start gap-5 p-5 pl-6 py-6'
					>
						<h4 className='text-xl font-medium'>Modal Image</h4>
						<div className='p-3 pl-0 flex gap-4 items-center justify-center'>
							<Card width='md' className='p-4 relative'>
								<ModalTitle>Welcome to My Modal 🎉</ModalTitle>
								<ModalContent>
									<ModalImage src='/card.svg' alt='Random Image' />
									<ModalDescription>
										Bu tayyor modal komponenti. Siz unga istagan content
										qo‘shishingiz mumkin.
									</ModalDescription>
								</ModalContent>

								<ModalFooter align='right'>
									<Button
										onClick={() => setIsOpen(false)}
										variant='outline'
										className='mr-2'
									>
										Cancel
									</Button>
									<Button
										onClick={() => alert('Tasdiqlandi!')}
										className='bg-green-600 hover:bg-green-700 text-white'
									>
										Confirm
									</Button>
								</ModalFooter>
							</Card>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
