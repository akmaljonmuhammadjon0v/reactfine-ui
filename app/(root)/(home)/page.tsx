import { ArrowRight, Code2, Layers, Palette } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'reactfine-ui';
import Footer from '../_components/footer/footer';

const componentShowcases = [
	{
		name: 'Buttons',
		description: 'Variants, states, and icons with one config.',
		preview: (
			<div className='flex flex-wrap gap-3'>
				<Button variant='dark' rounded='full'>
					Primary
				</Button>
				<Button variant='secondary' rounded='full'>
					Secondary
				</Button>
				<Button variant='outline' rounded='full'>
					<ArrowRight className='h-4 w-4' />
					Outline
				</Button>
			</div>
		),
	},
	{
		name: 'Cards',
		description: 'Composable layouts with Tailwind utility presets.',
		preview: (
			<div className='grid w-full gap-3'>
				<div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)]'>
					<p className='text-xs uppercase tracking-[0.28em] text-slate-400'>
						Overview
					</p>
					<p className='mt-3 text-lg font-semibold text-slate-900'>
						Lightweight scaffolds for dashboards and settings.
					</p>
				</div>
				<div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)]'>
					<p className='text-xs uppercase tracking-[0.28em] text-slate-400'>
						Usage
					</p>
					<ul className='mt-3 space-y-2 text-sm text-slate-600'>
						<li>• Slot-based children</li>
						<li>• Auto responsive grid</li>
						<li>• Dark mode ready</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: 'Inputs',
		description: 'Form primitives with validation-friendly patterns.',
		preview: (
			<div className='w-full space-y-3'>
				<label className='flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)]'>
					<span className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
						API KEY
					</span>
					<input
						className='rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white'
						placeholder='sk-live-...'
					/>
				</label>
				<div className='flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-[0_10px_40px_rgba(15,23,42,0.08)]'>
					<span>Status</span>
					<span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
						Connected
					</span>
				</div>
			</div>
		),
	},
];

const features = [
	{
		icon: Layers,
		title: 'Easy to use',
		description:
			'Composable APIs with sensible defaults so you can ship faster without rewriting patterns.',
	},
	{
		icon: Palette,
		title: 'Customizable',
		description:
			'Scales from minimal prototypes to fully branded systems using Tailwind design tokens.',
	},
	{
		icon: Code2,
		title: 'Built with TypeScript',
		description:
			'End-to-end typings, generics, and IntelliSense support for every building block.',
	},
];

function App() {
	const footerContent = (
		<span className='text-sm text-slate-600'>
			© {new Date().getFullYear()} ReactFine UI. Crafted for product teams.
		</span>
	);

	return (
		<main className='relative min-h-screen overflow-x-hidden bg-[#F7F6F3] text-slate-900'>
			<div className='relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-5 sm:px-8 lg:px-16 pb-24 pt-20'>
				{/* HERO */}
				<header className='flex flex-1 flex-col items-center justify-center text-center'>
					<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-[0_12px_40px_rgba(15,23,42,0.1)]'>
						React UI Toolkit
					</span>
					<p className='mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
						ReactFine UI
					</p>
					<p className='mt-5 max-w-2xl text-base text-slate-600 sm:text-lg'>
						A curated collection of production-ready React components crafted
						for teams who value clarity, velocity, and delightful developer
						experience.
					</p>
					<div className='mt-10 flex flex-col gap-3 sm:flex-row'>
						<Link
							href='/docs/introduction'
							className='group inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:bg-slate-800'
						>
							Get Started
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Link>
						<Link
							href='/docs/installation'
							className='inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition hover:-translate-y-0.5 hover:border-slate-400'
						>
							Go to Docs
						</Link>
					</div>
				</header>

				{/* COMPONENT SHOWCASE */}
				<section className='rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 sm:p-10 lg:p-14 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md'>
					<div className='mx-auto max-w-3xl text-center'>
						<h2 className='text-2xl sm:text-3xl font-semibold mb-3'>
							Crafted components
						</h2>
						<p className='text-base text-slate-600 sm:text-lg'>
							Slot-driven primitives with sensible spacing, accessible states,
							and polished UI tokens.
						</p>
					</div>
					<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{componentShowcases.map(component => (
							<article
								key={component.name}
								className='flex flex-col gap-5 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-[0_18px_65px_rgba(15,23,42,0.09)] w-full'
							>
								<div>
									<h3 className='text-lg font-semibold text-slate-900'>
										{component.name}
									</h3>
									<p className='mt-2 text-sm text-slate-600'>
										{component.description}
									</p>
								</div>
								<div className='rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]'>
									{component.preview}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* FEATURES */}
				<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-[2.5rem] border border-slate-100 bg-white/60 p-6 sm:p-10 lg:p-14 shadow-[0_25px_90px_rgba(15,23,42,0.08)] backdrop-blur-md'>
					{features.map(({ icon: Icon, title, description }) => (
						<div
							key={title}
							className='flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-[0_15px_60px_rgba(15,23,42,0.08)]'
						>
							<div className='w-fit rounded-full bg-slate-900/5 p-3 text-slate-900'>
								<Icon className='h-6 w-6' />
							</div>
							<h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
							<p className='text-sm text-slate-600'>{description}</p>
						</div>
					))}
				</section>
			</div>

			<Footer content={footerContent} />
		</main>
	);
}

export default App;
