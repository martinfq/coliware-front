import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPostEntry = CollectionEntry<'blog'>;

export interface BlogPostStaticPath {
	params: {
		slug: string;
	};
	props: {
		post: BlogPostEntry;
		previousPost: BlogPostEntry | null;
		nextPost: BlogPostEntry | null;
	};
}

function sortByNewest(a: BlogPostEntry, b: BlogPostEntry) {
	return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

function getPostSegment(post: BlogPostEntry) {
	if ('slug' in post && typeof post.slug === 'string' && post.slug.length > 0) {
		return post.slug;
	}

	return post.id.replace(/\.md$/, '');
}

export function getBlogPostUrl(post: BlogPostEntry) {
	return `/blog/${getPostSegment(post)}/`;
}

export async function getBlogPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort(sortByNewest);
}

export async function getBlogPostStaticPaths(): Promise<BlogPostStaticPath[]> {
	const posts = await getBlogPosts();

	return posts.map((post, index) => ({
		params: {
			slug: getPostSegment(post)
		},
		props: {
			post,
			previousPost: posts[index + 1] ?? null,
			nextPost: posts[index - 1] ?? null
		}
	}));
}