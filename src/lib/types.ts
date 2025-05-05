export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Array<string>;
	published: boolean;
};

export type MetadataType = {
	[key: string]: {
		title: string;
		location: string;
	};
};

export type NavbarLink = {
	icon: string;
	name: string;
	href: string;
	isExternal: boolean;
	hoverIcon?: string;
	hoverName?: string;
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
	repo?: string;
	isFeatured?: boolean;
};
