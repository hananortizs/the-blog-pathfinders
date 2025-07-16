import { PostModel } from '@/models/post/post-model';
import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

export function PostSummary(post: PostModel) {
  const postLink = `/post/${post.slug}`;
  return (
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
  );
}
