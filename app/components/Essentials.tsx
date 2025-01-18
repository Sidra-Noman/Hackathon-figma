import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Essentials = () => {
  return (
    <div>
    <div className="pb-6 sm:pb-12">
    {/* Heading start */}
    <div className="">
    <div className='pl-5 sm:pl-20 text-center sm:text-left pt-8'>
  <p className='text-[23px] font-medium '>The Essentials</p>
</div>
    </div>
    {/* Heading end */}

    {/* Products Section */}
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 start */}
        <div className="w-full relative">
          <Image src="/images/Image (10).png" alt="image 10" width={440} height={540} className="w-full sm:h-auto " />
          <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
              <p className='text-[15px] text-center font-medium py-2'>Men&apos;s</p>
          </div>
        </div>
        {/* Card 1 end */}
        {/* Card 2 start */}
        <div className="w-full relative">
          <Image src="/images/Image (11).png" alt="image 11" width={440} height={540} className="w-full sm:h-auto " />
          <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
              <p className='text-[15px] text-center font-medium py-2'>Women&apos;s</p>
          </div>
        </div>
        {/* Card 2 end */}
        {/* Card 3 start */}
        <div className="w-full relative">
          <Image src="/images/Frame (4).png" alt="frame 4" width={440} height={540} className="w-full sm:h-auto " />
          <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
              <p className='text-[15px] text-center font-medium py-2'>Kid&apos;s</p>
          </div>
        </div>
        {/* Card 3 end */}
      </div>
    </div>
  </div>
  

  <div className="flex my-10 justify-evenly">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-8">
          {/* Column 1 */}
          <div className="text-center text-[12px]  lg:text-left">
            <h3 className="mb-4 font-medium ">Icons</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className=" hover:underline">
                  Air Force 1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Huarache
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Air Max 90
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Air Max 95
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-center text-[12px]  lg:text-left">
            <h3 className="font-medium mb-4">Shoes</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className="hover:underline">
                  All Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Custom Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Jordan Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Running Shoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center text-[12px] lg:text-left">
            <h3 className=" mb-4 font-medium">Clothing</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className="hover:underline">
                  All Clothing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Modest Wear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Hoodies & Pullovers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shirts & Tops
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-center text-[12px] lg:text-left">
            <h3 className=" mb-4 font-medium">Kids&apos;</h3>
            <ul className="space-y-4 text-[#7E7E7E] ">
              <li>
                <Link href="#" className="hover:underline">
                  Infant & Toddler Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Jordan Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Basketball Shoes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Essentials
