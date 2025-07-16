import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import clsx from 'clsx';

export function PostFeatured() {
  const slug = 'asd';
  const postLink = `/post/${slug}`;
  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Alt da Imagem',
          priority: true,
        }}
      />
      <div className='flex flex-col mb-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-07-12'
        >
          12/07/2025 12:00
        </time>
        <PostHeading url={postLink} as='h1'>
          Lorem ipsum dolor sit amet.
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reprehenderit, accusantium fugiat saepe itaque nam. Hic nisi
          temporibus tempora incidunt recusandae nihil dolores aliquid
          consectetur sit quis! Nulla, ab magni?
        </p>
      </div>
    </section>
  );
}
