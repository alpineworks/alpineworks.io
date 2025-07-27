"use client";

import BackgroundDarkVeil from "@/components/home/background/background";
import DecryptedText from "@/components/home/text/text";

export default function Home() {
  return (
    <>
      <div className="-z-10 h-full w-full fixed top-0 left-0">
        <BackgroundDarkVeil hueShift={22} />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative flex items-center justify-center">
          <div className="text-xl md:text-6xl text-blue-300 relative z-10 bg-opacity-[4%] backdrop-blur-[16px] bg-white py-4 px-10 rounded-full border-gray-700 border flex items-center drop-shadow-md">
            <DecryptedText
              text="ALPINEWORKS.IO"
              animateOn="view"
              revealDirection="start"
              speed={80}
              sequential={true}
              className="tracking-widest"
            />
          </div>
        </div>
      </div>
    </>
  );
}
