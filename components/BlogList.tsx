import PostBanner from './PostBanner'

type Props = {
  posts: Post[]
}

function BlogList({posts}: Props) {
  return (
    <div>
      <hr className="border-brand mb-10 mx-2 lg:mx-10"/>

      <div className="grid grid-cols-1 md:grid-cols-2 px-2 lg:px-10 gap-x-10 gap-y-16 pb-24">
        {/*Posts*/}
        {posts.map(post => <PostBanner data={post}/>)}
      </div>
    </div>
  )
}

export default BlogList