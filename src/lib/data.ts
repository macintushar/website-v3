import type { NavbarLink, ProjectLink } from '$lib/types';

export const RESUME_URL = "https://4m1wldtwrj.ufs.sh/f/MxNtnUD1KQruLX1pik5uhUSsHob0zPnG42ZxcVpJmry5BOWe"

export const socialLinks = {
	github: 'https://github.com/macintushar',
	linkedin: 'https://www.linkedin.com/in/tushar-selvakumar/'
};

export const homePageData = {
	organisation: 'AI Squared',
	role: 'Software Engineer (SDE-1)',
	tagline: 'Glorified Construction Worker for the Internet (read:front-end developer)',
	name: 'Tushar',
	tag: '@macintushar',
	additionalInfo: [
		'I love travelling and eating food from different cultures. My favourites are probably Japanese and Italian (though this is always changing).',
		" I also am a huge fan of tech so I'm always keeping up with the latest stuff from Apple, Google and many other companies."
	]
};

export const navbarLinks: NavbarLink[] = [
	{ icon: '💻', name: 'Projects', href: '/projects', isExternal: false },
	{ icon: '✍️', name: 'Blog', href: '/blog', isExternal: false },
	{
		icon: '📷',
		name: 'Photos',
		href: '/photos',
		isExternal: false,
		hoverIcon: '📸',
		hoverName: 'Photos'
	},
	{ icon: '✉️️', name: 'Contact', href: 'mailto:hi@macintushar.xyz', isExternal: true },
	{
		icon: '📄',
		name: 'Resume',
		href: RESUME_URL,
		isExternal: true
	}
];

export const projects: ProjectLink[] = [
	{
		name: 'Draw',
		url: 'https://draw.macintushar.xyz',
		github: 'https://github.com/macintushar/draw',
		repo: 'draw',
		description:
			'The digital drawing tool that enables you to create, edit, and share your drawings across all your devices.',
		date: '2024',
		heroImage: 'https://draw.macintushar.xyz/draw-preview-img.png',
		tags: ['React', 'TypeScript', 'Excalidraw', 'Supabase'],
		ctaText: 'Try Draw',
		isFeatured: true
	},
	{
		name: 'SPKR - Voice Keyboard',
		github: 'https://github.com/macintushar/SPKR-Voice-Keyboard',
		description: 'SPKR is a keyboard app that turns voice input into translated text.',
		heroImage: 'https://utfs.io/f/94b46082-327a-43b3-9c93-327a45638769-1ip38.png',
		date: '2023'
	},
	{
		name: 'Sneaker Street',
		github: 'https://github.com/macintushar/SneakerStore',
		heroImage: 'https://utfs.io/f/94b46082-327a-43b3-9c93-327a45638769-1ip38.png',
		description:
			'Sneaker Street is an e-commerce platform intended on helping users to easily purchase sneakers.',
		date: '2023'
	}
];
