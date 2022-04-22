import path from "path"

const createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllPostsQuery {
      cms {
        posts(first: 10) {
          data {
            slug
          }
        }
      }
    }
  `)

  data.cms.posts.forEach((data: any) => {
    actions.createPage({
      path: `posts/slug=${data.slug}`,
      component: path.resolve("./src/templates/post-item.template.tsx"),
      context: {
        slug: data.slug
      }
    })
  })
}

export default createPages