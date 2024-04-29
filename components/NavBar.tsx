import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const NavBar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
                <Link href={'/'} className='flex items-center justify-center'>
                    <Image src='/logo.svg' alt='car_logo'
                        width={118}
                        height={18}
                        className='object-contain' />
                </Link>
                <CustomButton
                    title='Sign up'
                    btnStyle='button'
                    containerStyles='rounded-full bg-white text-primary-blue min-w-[130px]' />
            </nav>
        </header>
    )
}

export default NavBar