import React from 'react'
import TopSection from './TopSection';
import BlogCardSection from './BlogCardSection';
import SeemLessSection from './SeemLessSection';
import BlogContent from './blogCard/[slug]';

const BlogPage = () => {
  return (
    <div className='bd-black'>
      {/* <BlogContent/> */}
        <TopSection/>
        <BlogCardSection/>
        <SeemLessSection/>
    </div>
  )
}

export default BlogPage;
