'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface CodeBlockProps {
	code: string;
	title: string;
}
const CodeBlock = ({ code, title }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Nusxa olishda xatolik:', err);
		}
	};

	return (
		<div className='bg-white rounded-lg shadow-lg max-w-4xl overflow-hidden border border-gray-200'>
			{/* Header */}
			<div className='bg-[#F9FAFB] border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
				<div className='flex items-center space-x-3'>
					<span className='text-sm font-medium'>{title}</span>
				</div>
				<button
					onClick={copyToClipboard}
					className='flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-200'
				>
					{copied ? <Check size={16} /> : <Copy size={16} />}
					<span className='text-sm'>{copied ? 'Copied!' : 'Copy'}</span>
				</button>
			</div>

			{/* Code Content */}
			<div className='bg-white  p-4 overflow-x-auto'>
				<div className='relative'>
					<SyntaxHighlighter
						language='jsx'
						style={atomOneLight}
						customStyle={{ margin: 0, background: 'transparent' }}
						wrapLongLines={true}
						showLineNumbers={true}
						lineNumberStyle={{
							color: '#6B7280',
							fontSize: '0.75rem',
							minWidth: '2em',
							textAlign: 'right',
						}}
					>
						{code}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
};

export default CodeBlock;
