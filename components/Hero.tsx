'use client';
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, Book, rent a car ... quickly and easily
                </h1>
                <p className='hero__subtitles'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <CustomButton
                    title='Explore Car'
                    containerStyles='bg-primary-blue text-white
                 rounded-full mt-10'
                    handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt='image'
                        fill className='object-contain' />
                    <div className='hero__image-overlay'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero