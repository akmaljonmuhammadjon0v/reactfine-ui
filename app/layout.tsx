import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import 'reactfine-ui/dist/index.css';

const geistSans = Montserrat({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://akmaldev.uz'),
	title: 'Reactfine UI - A Beautiful React Component Library',
	description:
		'A curated collection of production-ready React components crafted for teams who value clarity, velocity, and delightful developer experience.',
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: {
		icon: '/logo.png',
	},
	keywords: [
		'UI Library',
		'ui library',
		'ui components',
		'akmal muhammadjonov',
		'Akmaldev',
		'akmaldev',
		'React UI Library',
		'Next.js UI Library',
		'Frontend developer portfolio',
		'Web developer portfolio',
		'Modern Portfolio',
		'Responsive Portfolio',
	],
	openGraph: {
		title: 'Reactfine UI - A Beautiful React Component Library',
		description:
			'A curated collection of production-ready React components crafted for teams who value clarity, velocity, and delightful developer experience.',
		type: 'website',
		url: 'https://akmaldev.uz',
		locale: 'en_EN',
		images:
			'https://www.setu.ie/Craft/assets/banners/_800x418_crop_center-center_82_none/informationtech.jpg?mtime=1711539742',
		countryName: 'Uzbekistan',
		siteName: 'Reactfine UI',
		emails: 'info@akmaldev.uz',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
