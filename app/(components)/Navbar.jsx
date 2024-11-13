"use client"
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">My Blog</div>
        <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="menu-toggle" onClick={()=> {document.querySelector(".nav-links").classList.toggle("active")}}>&#9776;</div>
    </nav>
  )
}
