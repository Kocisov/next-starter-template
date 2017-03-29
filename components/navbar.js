import React from 'react'
import Link from 'next/link'
import Home from 'react-icons/lib/io/home'
import PaintBucket from 'react-icons/lib/io/paintbucket'

export default () => (
  <nav className="nav">
    <style jsx>{`
      .nav {
        align-items: center;
        display: flex;
      }

      .nav li,
      .nav li a {
        display: flex;
      }

      .nav li a {
        color: #333;
        padding-right: 10px;
        text-decoration: none;
      }
    `}</style>
    <li>
      <Link href="/">
        <a>
          <Home
            height={40}
            width={40}
          />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/color">
        <a>
          <PaintBucket
            height={40}
            width={40}
          />
        </a>
      </Link>
    </li>
  </nav>
)
