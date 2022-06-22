// @ts-ignore
import { client } from '$lib/graphql/graphql-client'
// @ts-ignore
import { getAllPosts } from '$lib/graphql/graphql-queries'

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async () => {
  try {
    const { posts } = await client.request(getAllPosts)

    return {
      status: 200,
      body: { posts },
    }
  } catch (error) {
    return {
      status: 500,
      // @ts-ignore
      body: { error: error.message },
    }
  }
}