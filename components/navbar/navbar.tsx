import React from 'react';
import Logo from "@/components/navbar/logo";
import NavSearch from "@/components/navbar/nav-search";
import DarkMode from "@/components/navbar/dark-mode";
import LinksDropDown from "@/components/navbar/link-dropdown";

const NavBar = () => {
  return (
    <nav className='border-b'>
      <div
        className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo/>
        <NavSearch/>
        <div className='flex gap-4 items-centre'>
          <DarkMode/>
          <LinksDropDown/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar