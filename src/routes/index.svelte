<script context="module">
	import PostCard from '$lib/components/post-card.svelte'
	import { client } from '$lib/graphql/graphql-client'
	import { getAllPosts } from '$lib/graphql/graphql-queries'
  
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
	  const { posts } = await client.request(getAllPosts, { limit: 2 })
  
	  return {
		props: {
		  posts,
		},
	  }
	}
  </script>
  
  <script>
	/** @type {any} */
	export let posts
  </script>
  
  <div class="prose prose-xl mb-10">
	<h1>Building with SvelteKit and GraphQL</h1>
  
	<p>
	  This is a collection of posts I've written about building with
	  SvelteKit and GraphQL.
	</p>
  
	<h2>Latest posts:</h2>
  </div>
  
  {#each posts as post}
	<PostCard {post} />
  {/each}
  
  <a
	href="/posts"
	sveltekit:prefetch
	class="btn btn-primary btn-block mb-20">Check out the posts</a
  >