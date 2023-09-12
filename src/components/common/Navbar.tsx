'use client'

import {
  Navbar as AppBar,
  Image,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
} from '@nextui-org/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <AppBar className='w-full border-b shadow-sm border-zinc-200 dark:border-zinc-700'>
      <NavbarBrand>
        <Image
          src='https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png'
          className='w-[120px]'
        />
      </NavbarBrand>
      <NavbarContent justify='center' className='hidden md:flex'>
        <NavbarItem className='w-[600px]'>
          <Input placeholder='Search...' />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            href='/login'
            className='bg-orange-500 font-medium text-white hover:bg-orange-600'>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </AppBar>
  )
}
export default Navbar
