"use client";

import TezzeractBrick from "../assets/images/tezzeractbrick.webp";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#00AAF0_18%,#00378A_35%,#022355_66%,#000)] py-[72px] sm:py-24 relative overflow-clip">
      {/* Radial gradient overlay at the top */}
      <div className="absolute h-[350px] w-[1450px] sm:w-[1536px] sm:h-[420px] lg:w-[3000px] lg:h-[410px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#00AAF0] bg-[radial-gradient(closest-side,#000_82%,#00AAF0)] top-[calc(0%-300px)] sm:top-[calc(0%-350px)]"></div>
      
      {/* Background image positioned on the right */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${TezzeractBrick})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "110% 50%",
          backgroundSize: "50%",
        }}
      ></div>

      <div className="container relative mx-auto">
        <div className="flex justify-left">
          <div className="w-[100%] md:w-[60%] lg:w-[50%] text-center">
            <motion.h2 
              className="text-5xl sm:text-7xl font-bold tracking-tighter text-left mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>

            <motion.p 
              className="text-left text-lg mt-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Don't let manual processes hold you back. Our automation experts are
              ready to design a custom solution that will streamline your
              operations and accelerate your growth.
            </motion.p>

            <motion.div 
              className="flex justify-left mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => router.push("/book-a-call")}
                className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Book a Free Strategy Call
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};