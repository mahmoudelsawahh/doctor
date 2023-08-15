"use client"
import { Cairo } from 'next/font/google';
import rtlPlugin from 'stylis-plugin-rtl';
import dynamic from 'next/dynamic';
import {CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import AppBar from './Navbar';

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  typography : {
    fontFamily : cairo.style.fontFamily
  },
  palette: {
    primary : {
        main : '#fff',
    },
    text:{
      primary: "#333",
    }
  },
  direction: 'rtl',
  
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
      <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
         <>
             <AppBar/>
            {children}
         </>
      </ThemeProvider>
    </CacheProvider>
      </div>
  )
}
