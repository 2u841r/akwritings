// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeMdbook from 'starlight-theme-mdbook';

const categories = [
	['স্টোরি টাইম', 'স্টোরি-টাইম'],
	['সেলফ ইম্প্রুভমেন্ট ও বয়েজ ইস্যু', 'সেলফ-ইম্প্রুভমেন্ট-ও-বয়েজ-ইস্যু'],
	['রোমান্স ও রিলেশনশীপ', 'রোমান্স-ও-রিলেশনশীপ'],
	['ফেমিনিজম', 'ফেমিনিজম'],
	['সমরাস্ত্র ও যুদ্ধকৌশল', 'সমরাস্ত্র-ও-যুদ্ধকৌশল'],
	['বিদেশী পলিটিক্স', 'বিদেশী-পলিটিক্স'],
	['ভারত ও হিন্দুত্ববাদ', 'ভারত-ও-হিন্দুত্ববাদ'],
	['সোশ্যাল ইস্যু', 'সোশ্যাল-ইস্যু'],
	['টেকনোলজি', 'টেকনোলজি'],
	['দেশী পলিটিক্স', 'দেশী-পলিটিক্স'],
	['জুলাই অভ্যুত্থান', 'জুলাই-অভ্যুত্থান']
];

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ahmad Khan',
			description: 'Ahmad Khan Articles',
			logo: { src: './src/assets/logo.jpg' },
			favicon: '/logo.jpg',
			tableOfContents: false,
			plugins: [starlightThemeMdbook()],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/SolaimanLipiNormal.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: true,
					},
				},
			],
			social: [{ icon: 'telegram', label: 'Telegram', href: 'https://dub.sh/akwritings' }],
			sidebar: [
				...categories.map(([label, directory]) => ({
					label,
					items: [{ autogenerate: { directory } }],
				})),
				{ label: 'About', link: '/about/' },
			],
		}),
	],
});
