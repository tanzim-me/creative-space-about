import React from 'react'
import { Inter } from 'next/font/google'
import { cards } from './data/cards';
import SingleCard from '../components/singleCard';
import Image from 'next/image';


const inter = Inter({ subsets: ["latin"] });

const page = () => {

  return (
    <>  
    {/* *************************** Our Values Section Start ************************* */}
        <div className='py-25 bg-[#F9FAFB]'>

            <div className='container '>

                <div className='text-center'>
                    <h1 className={`${inter.className} font-bold text-[48px] text-[#09231E]`}>Our Core Values</h1>
                    <p className={`${inter.className} font-normal text-[18px text-[#4A5565]] mt-3`}>The principles that guide everything we do</p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-20 justify-center mt-20">
                    {
                        cards.map((card, index) => (
                            <SingleCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    {/* *************************** Our Values Section End ************************** */}

    {/* *************************** Our Story Section Start ************************* */}
        <div className='py-30 bg-white'>
            <div className='container flex gap-28 justify-center'>
                <div className='w-[561px] h-[351px]'>
                    <h1 className={`${inter.className} font-bold text-[48px] text-[#09231E] mb-6`}>Our Story</h1>

                    <p className={`${inter.className} font-normal text-[18px] text-[#4A5565] mb-6`}>Founded in 2010, BuildTech emerged from a simple vision: to transform the construction industry through sustainable practices and innovative solutions. What started as a small team of passionate engineers has grown into one of the region's most trusted construction firms.
                    </p>

                    <p className={`${inter.className} font-normal text-[18px] text-[#4A5565]`}>
                    Over the years, we've completed more than 120 projects ranging from residential complexes to large-scale industrial facilities. Each project has reinforced our commitment to quality, safety, and environmental responsibility.
                    </p>
                </div>

                <div>
                    <Image
                        src="/Rectangle7.png"
                        alt="our story image"
                        width={648}
                        height={484}
                    />
                </div>
            </div>

        </div>
    {/* *************************** Our Story Section End *************************** */}
    </>
  )
}

export default page