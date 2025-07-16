import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <div className='flex flex-col mb-4 sm:justify-center'>
              <time
                className='text-slate-600 block text-sm/tight'
                dateTime={post.createdAt}
                title={formatDistanceToNow(post.createdAt)}
              >
                {formatDateTime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as='h1'>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
