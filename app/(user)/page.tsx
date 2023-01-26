import React from 'react';
import 'tailwindcss/tailwind.css';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.clients';
import PreviewSuspense from '../components/PreviewSuspense';
import PreviewBlogList from '../components/PreviewBlogList';
import BlogList from '../components/BlogList';

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
export const revalidate = 30;
export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
