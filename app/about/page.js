import React from "react";
import { Inter } from "next/font/google";
import { cards } from "../data/cards";
import SingleCard from "../components/singleCard";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <>
      {/* *************************** Our Values Section Start ************************* */}
      <div className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Section Title */}
          <div className="text-center">
            <h1 className={`${inter.className} font-bold text-3xl sm:text-4xl md:text-5xl text-[#09231E]`}>Our Core Values</h1>
            <p className={`${inter.className} font-normal text-base sm:text-lg text-[#4A5565] mt-3`}>The principles that guide everything we do</p>
          </div>

          {/* ************************* Cards ********************** */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:mt-20 mt-10">
            {cards.map((card, index) => (
              <SingleCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* *************************** Our Values Section End ************************** */}

      {/* *************************** Our Story Section Start ************************* */}
      <div className="py-20 lg:py-30 bg-white">
        <div className="container flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:items-start gap-12 lg:gap-28 px-4 lg:px-0">
          {/* Text Section */}
          <div className="w-full lg:w-[561px]">
            <h1 className={`${inter.className} font-bold text-3xl sm:text-4xl md:text-5xl text-[#09231E] mb-6`}>Our Story</h1>

            <p className={`${inter.className} font-normal text-base sm:text-lg text-[#4A5565] mb-6`}>
              Founded in 2010, BuildTech emerged from a simple vision: to
              transform the construction industry through sustainable practices
              and innovative solutions. What started as a small team of
              passionate engineers has grown into one of the region's most
              trusted construction firms.
            </p>

            <p className={`${inter.className} font-normal text-base sm:text-lg text-[#4A5565]`}>
              Over the years, we've completed more than 120 projects ranging
              from residential complexes to large-scale industrial facilities.
              Each project has reinforced our commitment to quality, safety, and
              environmental responsibility.
            </p>
          </div>

          {/* ********************** Image Section ********************** */}
          <div>
            <Image
              src="/Rectangle7.png"
              alt="Our Story"
              width={648}
              height={484}
            />
          </div>
        </div>
      </div>
      {/* *************************** Our Story Section End *************************** */}
    </>
  );
};

export default Page;
