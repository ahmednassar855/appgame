import React from 'react'
import headerStyle from './Header.module.css'

export default function Header() {
  return (
    <>
        <div className='container w-75 m-auto text-center'>
            <div className={headerStyle.bgImg + ' p-5'}>

            <h2 className='text-secondary p-5'>Find & track the best <span className='text-info'>free-to-play</span> games!</h2>
            <h5 className='text-secondary'>Track what you've played and search for what to play next! Plus get free premium loot! </h5>
            </div>
            
            
        </div>
    
    </>
  )
}
