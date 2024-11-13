"use client"
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">My Blog</div>
        <ul className="nav-links">
        <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={()=> {document.querySelector(".nav-links").classList.toggle("active")}}>&#9776;</div>
    </nav>
  )
}
