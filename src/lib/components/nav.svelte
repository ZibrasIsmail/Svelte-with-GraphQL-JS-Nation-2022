<script>
    /** @type {any} */
    export let pages
    import ThemeSwitch from './theme-switch.svelte'
  </script>
  
  <nav class="navbar bg-base-100 py-4 pb-20">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">
        JSNation 2022
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a href="/posts">Posts</a></li>
        {#each pages as { title, slug }}
          <li>
            <a sveltekit:prefetch href={`/${slug}`}>{title}</a>
          </li>
        {/each}
      </ul>
      <ThemeSwitch />
    </div>
  </nav>