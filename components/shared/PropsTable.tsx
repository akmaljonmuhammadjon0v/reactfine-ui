import React from 'react';
interface PropsTableProps {
	propsData: {
		prop: string;
		type: string;
		default: string;
		description: string;
	}[];
}
const PropsTable = ({ propsData }: PropsTableProps) => {
	return (
		<div className='max-w-4xl'>
			<div className='bg-white overflow-x-auto rounded-lg border shadow-sm overflow-hidden'>
				<table className='w-full'>
					<thead className='bg-gray-50 border-b border-gray-200'>
						<tr>
							<th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
								Prop
							</th>
							<th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
								Type
							</th>
							<th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
								Default
							</th>
							<th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
								Description
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200'>
						{propsData.map((item, index) => (
							<tr
								key={index}
								className='hover:bg-gray-50 border-b transition-colors'
							>
								<td className='px-6 py-4 text-sm font-mono text-gray-900'>
									{item.prop}
								</td>
								<td className='px-6 py-4 text-sm text-blue-600 font-mono'>
									{item.type}
								</td>
								<td className='px-6 py-4 text-sm text-gray-600 font-mono rounded'>
									{item.default}
								</td>
								<td className='px-6 py-4 sm:text-xs max-sm:text-xs md:text-sm text-gray-700'>
									{item.description}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Additional examples */}
			</div>
		</div>
	);
};

export default PropsTable;
