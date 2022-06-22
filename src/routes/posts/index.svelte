<script>
    import PostCard from '$lib/components/post-card.svelte'
  
    /** @type {any} */
    export let posts
  </script>
  
  {#each posts as post}
    <PostCard {post} />
  {/each}