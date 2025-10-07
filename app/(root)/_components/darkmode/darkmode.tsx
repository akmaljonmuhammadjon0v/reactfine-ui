'use client';
import { Sun } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

// Dark Mode Context

// Toggle Button Component
export default function DarkModeToggle() {
	const [isClicked, setIsClicked] = useState(false);

	const darkMode = () => {
		setIsClicked(!isClicked);
		document.body.classList.toggle('dark');
	};
	return (
		<button
			onClick={darkMode}
			aria-label='Toggle dark mode'
			className='dark:!text-white relative w-6 h-6'
		>
			{isClicked ? (
				<Sun size={20} />
			) : (
				<Image fill src='/moon.svg' alt='Moon' />
			)}
		</button>
	);
}
