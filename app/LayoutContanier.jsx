"use client"
import { Cairo } from 'next/font/google';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/app/component/Footer/Footer'), {
  ssr : false
})
const AppBar = dynamic(() => import('./Navbar'), {
  ssr : false
})
 const cairo = Cairo({ 
    subsets: ['latin'] ,
    display : 'swap',
    preload : true
  })

export default function LayoutContainer({ children }) {
  return (
      <div
       className={cairo.className}
       >
         <>
             <AppBar/>
            {children}
            <Footer/>
         </>
      </div>
  )
}
