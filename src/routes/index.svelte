<script context="module">
	import PostCard from '$lib/components/post-card.svelte';
	import { client } from '$lib/graphql/graphql-client';
	import { getAllPosts } from '$lib/graphql/graphql-queries';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		const { posts } = await client.request(getAllPosts);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	/** @type {any} */
	export let posts;
</script>

{#each posts as post}
	<PostCard {post} />
{/each}
