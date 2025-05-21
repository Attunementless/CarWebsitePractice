"use client";

import Image from 'next/image';
import  CustomButton  from './CustomButton';

export default function hero() {
  const handleClick = () => {

  }

  return (
    <div className="hero">hero
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car --quickly and hardly !!!!
        </h1>

        <p className="hero__subtitle">
          Sreeamline your CAT rental expreience
          with our efortless booking process.
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue
          text-white round-full mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="Hero__image-container">
        <div className="hero__image">
          <Image src="./hero.png" alt="hero"
          fill className="object-contain" />
        </div>

        <div className="hero_image-overlay" />

      </div>
    </div>
      
  )
}
