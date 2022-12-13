import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { func } from 'joi';
import Secondnavbar from '../Navbar/Secondnavbar';

export default function Main() {
  const pathname = window.location.pathname;
  console.log(pathname);
  const currentPath = ["/","/login","/register",];
  console.log(currentPath);
  return <>

    { pathname ===  "/" || "/login" || "/register"  ? <Navbar /> :  <Secondnavbar /> }
    
    <Outlet />
    
    <Footer/>
  
  </>
}
