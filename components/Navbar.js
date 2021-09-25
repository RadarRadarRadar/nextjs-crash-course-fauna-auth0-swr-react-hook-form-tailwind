import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <a className='text-2xl mb-2 block text-center text-red-200 uppercase'>Errday Snippets</a>
      </Link>
      <div className='flex space-x-3 justify-center mb-6 m-x-auto'>
        <Link href='/snippets/html'>
          <a className='text-red-100 hover:underline'>HTML</a>
        </Link>
        <Link href='/snippets/css'>
          <a className='text-red-100 hover:underline'>CSS</a>
        </Link>
        <Link href='/snippets/javascript'>
          <a className='text-red-100 hover:underline'>JavaScript</a>
        </Link>
        <Link href="/api/auth/login">
          <a className='text-red-100 hover:underline'>Login</a>
        </Link>
        <Link href="/api/auth/logout">
          <a className='text-red-100 hover:underline'>Logout</a>
        </Link>
      </div>
    </nav>
  )
}
