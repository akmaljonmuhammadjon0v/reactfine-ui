import React from 'react';
import { Sun } from 'lucide-react';
import { SidebarProps } from '@/types';
import { Button } from 'reactfine-ui';

function Navbar({ title }: SidebarProps) {
	return (
		<>
			<div className='w-full h-16 flex fixed z-50 top-0 items-center'>
				<div className='flex items-center w-full h-full bg-secondary px-24 bg-white border-b border-b-[#E5E7EB] text-black justify-between'>
					<div className='text-xl font-bold'>{title}</div>
					<div>
						<Button size='icon'>
							<Sun />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
