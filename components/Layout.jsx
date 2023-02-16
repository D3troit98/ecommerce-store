import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Layout = ({children}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const handleScroll = event => {
    const currentScrollTop = event.currentTarget.scrollTop;
    setVisible(scrollTop > currentScrollTop);
    setScrollTop(currentScrollTop);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className='layout'
    onScroll={handleScroll}
    >
        <Head>
            <title>Detroit Store</title>
        </Head>
        <header style={{ display: visible ? 'block' : 'none' }}>
            <Navbar />
        </header>
        
        {/* <main className='main-container'>
        {children}
        </main> */}
        <footer>
            <Footer />
        </footer>

        
    {  scrollTop > 500 &&<div 
        className="scroll-to-top"
        onClick={handleScrollToTop}
      >
        <BsFillArrowUpCircleFill className='scroll-top-arrow'/>
      </div>
      }
    </div>
  )
}

export default Layout