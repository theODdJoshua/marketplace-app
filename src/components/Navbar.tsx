import React from 'react';

const Navbar = () => (
  <nav className="glass-navbar flex items-center justify-between px-8 py-4 fixed w-full top-0 z-50">
    <div className="font-bold text-xl text-white">Marketplace</div>
    <ul className="flex gap-8 text-lg text-white">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/bundles">Bundles</a></li>
      <li><a href="/cart">Cart</a></li>
      <li><a href="/account">Account</a></li>
    </ul>
  </nav>
);

export default Navbar;