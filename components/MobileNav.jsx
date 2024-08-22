"use client"

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: 'Home',
        path: "/",
    },
    {
        name: 'Serviços',
        path: "/services",
    },
    {
        name: 'sobre mim',
        path: "/about",
    },
    {
        name: 'Cases',
        path: "/cases",
    },
    {
        name: 'Contato',
        path: "/contact",
    }
]

const MobileNav = () => {
    const pathname = usePathname();

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="bg-primary">Content</SheetContent>
    </Sheet>
  )
}

export default MobileNav