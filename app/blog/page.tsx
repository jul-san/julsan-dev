import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Blog() {
  return (<>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>february 2, 2024</p>
            <Link href="/blog/i-think-my-biggest-fear-is-true" className='hover:underline'>i think my biggest fear is true ↗</Link>
        </div>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>january 18, 2024</p>
            <Link href="/blog/serc-shenanigans" className="hover:underline">serc shenanigans ↗</Link>
        </div>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>december 20, 2023</p>
            <Link href="/blog/my-top-five-video-game-list" className="hover:underline">my top 5 video game list ↗</Link>
        </div>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>october 25, 2023</p>
            <Link href="/pics" className="hover:underline">a weekend in atlanta ↗</Link>
        </div>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>october 4, 2023</p>
            <Link href="/pics" className="hover:underline">the importance of having a big ↗</Link>
        </div>
        <div className='pb-2'>
            <p className='text-gray-500 text-sm'>july 23, 2023</p>
            <Link href="/pics" className="hover:underline">evolution of my music taste ↗</Link>
        </div>



      
    </>)
}