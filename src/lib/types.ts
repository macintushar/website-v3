export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Array<string>
	published: boolean
}

export type MetadataType = {
	[key: string]: {
		title: string;
		location: string;
	};
};

export type NavbarLink = {
	name: string;
	href: string;
	isExternal: boolean;
}