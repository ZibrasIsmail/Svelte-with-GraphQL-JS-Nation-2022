<script>
	import Nav from '$lib/components/nav.svelte'
	import '../app.css'
  </script>
  
  <Nav />
  
  <main class="container max-w-3xl mx-auto px-4">
	<slot />
  </main>