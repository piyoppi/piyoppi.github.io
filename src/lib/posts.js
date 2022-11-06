export const createPostsFromMdx = item => ({
  title: item.frontmatter.title,
  date: item.frontmatter.date,
  url: `/weblog/${item.fields.slug}`,
  tags: item.frontmatter.tags,
})
