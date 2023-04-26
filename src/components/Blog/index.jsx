import React from 'react'
import TopSection from './TopSection';
import BlogCardSection from './BlogCardSection';
import SeemLessSection from './SeemLessSection';

const BlogPage = () => {
  return (
    <div className='bd-black'>
        <TopSection/>
        <BlogCardSection/>
        <SeemLessSection/>
    </div>
  )
}

export default BlogPage;
