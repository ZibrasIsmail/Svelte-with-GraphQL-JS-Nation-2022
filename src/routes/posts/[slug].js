// @ts-ignore
import { client } from '$lib/graphql/graphql-client'
// @ts-ignore
import { getPostQuery } from '$lib/graphql/graphql-queries'

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async req => {
  const { slug } = req.params
  try {
    const variables = { slug }
    const { post } = await client.request(getPostQuery, variables)

    return {
      status: 200,
      body: { post },
    }
  } catch (error) {
    return {
      status: 500,
      // @ts-ignore
      body: { error: error.message },
    }
  }
}