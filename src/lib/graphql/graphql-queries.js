import { gql } from 'graphql-request'

const POSTS_FRAGMENT = gql`
  fragment PostDetails on Post {
    title
    date
    tags
    coverImage {
      url
    }
  }
`

export const getAllPosts = gql`
  ${POSTS_FRAGMENT}
  query AllPosts {
    posts(orderBy: date_DESC) {
      slug
      excerpt
      ...PostDetails
    }
  }
`

export const getPostQuery = gql`
  ${POSTS_FRAGMENT}
  query PostQuery($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostDetails
      author {
        name
        authorTitle: title
        picture {
          url(
            transformation: {
              image: { resize: { fit: clip, height: 50, width: 50 } }
            }
          )
        }
      }
      content {
        html
      }
    }
  }
`