import React, { useState } from 'react'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPages from '@/components/Blog';

const BlogPage = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-black'>
      <NavBar show={show} setShow={setShow}/>
      <BlogPages />
      <Footer />
    </div>
  )
}

export default BlogPage;
