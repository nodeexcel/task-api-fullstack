import React from 'react'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPages from '@/components/Blog';

const BlogPage = () => {
  return (
    <div className='bd-black'>
      <NavBar/>
      <BlogPages/>
      <Footer/>
    </div>
  )
}

export default BlogPage;
