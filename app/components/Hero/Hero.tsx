import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div >
      

<div>
  {/* Header Section */}
  <div className="bg-[#F5F5F5] h-auto py-4">
    <p className="font-medium text-[15px] text-center">Hello Nike App</p>
    <p className="font-normal text-[11px] text-center mt-1">
      Download the app to access everything Nike. Get Your Great
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center">
    <Image
      src="/images/Image.png"
      alt="Nike Image"
      width={1400}
      height={700}
      className="w-full max-w-[1400px] object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="px-4 py-8 text-center">
    <p className="text-[15px] font-medium">First Look</p>
    <p className="text-[28px] lg:text-[56px] font-medium mt-2">
      NIKE AIR MAX PULSE
    </p>
    <p className="text-[15px] font-normal mt-4 mx-auto max-w-[90%] md:max-w-[510px]">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.
    </p>
  </div>

  {/* Button Section */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4">
    <button className="inline-block rounded-3xl bg-[#111111] px-6 py-2 text-center text-[15px] font-medium text-white">
      Notify Me
    </button>
    <button className="inline-block rounded-3xl bg-[#111111] px-6 py-2 text-center text-[15px] font-medium text-white border border-black">
      Shop Air Max
    </button>
  </div>
</div>

      
    </div>
  );
};

export default Hero
