import React from 'react';
import loadingStyle from './loding.module.css';

export default function Loadingscreen() {
  return (
    <>
    
    <div className={loadingStyle.loadingScreen + " vh-100 bg-secondary d-flex justify-content-center align-items-center"}>
      <i className="fa-solid fa-spinner fa-spin fa-7x text-white"> </i>
    </div>
    
    </>
  )
}
