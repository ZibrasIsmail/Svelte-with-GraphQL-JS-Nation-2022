<script>
    /** @type {any} */
    export let post
  </script>
  
  <section class="card bg-base-100 shadow-xl mb-8 group">
    <a href={`/posts/${post.slug}`}>
      <figure>
        <img alt={post.title} src={post.coverImage.url} />
      </figure>
      <div class="card-body">
        <div>
          <h2 class="card-title">{post.title}</h2>
          {#if post.tags}
            {#each post.tags as tag}
              <span
                class="badge mr-1 mb-4 badge-primary group-hover:bg-secondary transition"
              >
                {tag}
              </span>
            {/each}
          {/if}
          <p class="link group-hover:text-primary-content transition">
            {post.excerpt}...
          </p>
        </div>
      </div>
    </a>
  </section>