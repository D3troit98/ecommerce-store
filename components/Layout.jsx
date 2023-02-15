import React,{useState} from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = event => {
    const currentScrollTop = event.currentTarget.scrollTop;
    setVisible(scrollTop > currentScrollTop);
    setScrollTop(currentScrollTop);
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
        
        <main className='main-container'>
        {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout