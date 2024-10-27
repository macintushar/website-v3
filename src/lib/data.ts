export const socialLinks = {
	github: 'https://github.com/macintushar',
	linkedin: 'https://www.linkedin.com/in/tushar-selvakumar/'
};

export const homePageData = {
	organisation: 'AI Squared',
	role: 'Software Engineer (SDE-1)',
	tagline: 'Glorified Construction Worker for the Internet (read:front-end developer)',
	name: 'Tushar',
	tag: '@macintushar'
};

export type ProjectLink = {
	name: string;
	url?: string;
	github?: string;
	description?: string;
	ctaText?: string;
	date?: string;
	heroImage?: string;
	tags?: string[];
	isFeatured?: boolean;
};

export const projects: ProjectLink[] = [
	{
		name: 'Draw',
		url: 'https://draw.macintushar.xyz',
		github: 'https://github.com/macintushar/draw',
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
