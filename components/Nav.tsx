import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/pwt">
          <a>PWT</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
