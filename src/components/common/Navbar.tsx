'use client'

import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Input,
  Image,
} from '@nextui-org/react'
import Link from 'next/link'

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand as={Link} href='/'>
          <Image
            src='https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png'
            alt='reddit'
            className='w-7 mr-1'
          />
          <p className='font-bold text-inherit'>Reddit</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem className='w-[500px]'>
          <Input placeholder='Search' />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            href='#'
            className='bg-orange-500 hover:bg-orange-600 text-white'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
      </NavbarMenu>
    </Navbar>
  )
}
