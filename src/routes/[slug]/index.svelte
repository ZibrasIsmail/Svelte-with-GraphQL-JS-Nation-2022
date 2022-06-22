<script context="module">
    import { client } from '$lib/graphql/graphql-client'
    import { getPageQuery } from '$lib/graphql/graphql-queries'
  
    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({ params: { slug } }) => {
      const { page } = await client.request(getPageQuery, { slug })
  
      return {
        props: {
          page,
        },
      }
    }
  </script>
  
  <script>
    /** @type {any} */
    export let page
  </script>
  
  <div class="prose prose-xl">
    <h1>{page.title}</h1>
    {@html page.content.html}
  </div>