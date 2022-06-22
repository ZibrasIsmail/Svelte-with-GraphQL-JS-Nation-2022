<script context="module">
	import Nav from '$lib/components/nav.svelte'
	import PageTransition from '$lib/components/page-transition.svelte'
	import { client } from '$lib/graphql/graphql-client'
	import { getAllPages } from '$lib/graphql/graphql-queries'
	import { onMount } from 'svelte'
	// @ts-ignore
	import { themeChange } from 'theme-change'
	import '../app.css'
  
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => {
	  const { pages } = await client.request(getAllPages)
  
	  return {
		props: {
		  pages,
		  key: url.pathname,
		},
	  }
	}
  </script>
  
  <script>
	/** @type {any} */
	export let pages
	/** @type {string} */
	export let key
  
	onMount(() => {
	  themeChange(false)
	})
  </script>
  
  <PageTransition refresh={key}>
	<Nav {pages} />
	<main class="container max-w-3xl mx-auto px-4">
	  <slot />
	</main>
  </PageTransition>