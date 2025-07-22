import { findPostBySlugCached } from '@/lib/post/queries';
import { Suspense } from 'react';
import { SpinLoader } from '../SpinLoader';

type SinglePostProps = {
  slug: string;
};
export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <p>{post.content}</p>;
    </Suspense>
  );
}
