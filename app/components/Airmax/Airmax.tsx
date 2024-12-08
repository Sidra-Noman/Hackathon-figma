import React from 'react'
import Image from 'next/image'

const Airmax = () => {
  return (
    <div>
        <p className='text-center lg:text-start pl-11 text-[22px] font-medium '>Best of Air Max</p>
      <div className='flex    items-center justify-around mt-4  md:mt-6'>
        <div className='h-[510.36px] w-[441.36px] sm:w-[416px] bg-[#F7F7F7]  rounded-md'>
        <Image
                            src={`/images/Image (1).png`}
                            alt='image1'
                            height={441.36}
                            width={441.36}
                            
                        />

                        

        </div>
        <div className='h-[510.36px] w-[441.36px] sm:w-[416px] bg-[#F7F7F7] rounded-md'>
        <Image
                            src={`/images/Image (2).png`}
                            alt='image1'
                            height={441.36}
                            width={441.36}
                            
                        />

                        

        </div>
        <div className='h-[510.36px] w-[441.36px] sm:w-[416px] bg-[#F7F7F7]  rounded-md'>
        <Image
                            src={`/images/Image (3).png`}
                            alt='image1'
                            height={441.36}
                            width={441.36}
                            
                        />

                        

        </div>
        
      </div>
    </div>
  )
}

export default Airmax
