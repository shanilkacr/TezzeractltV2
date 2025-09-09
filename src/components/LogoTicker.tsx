"use client";
import Image from "next/image";
import Logo20 from "../assets/images/image20.png";
import Logo21 from "../assets/images/image21.png";
import Logo26 from "../assets/images/image26.png";
import Logo27 from "../assets/images/image27.png";
import Logo28 from "../assets/images/image28.png";
import Logo29 from "../assets/images/image29.png";
import Logo31 from "../assets/images/image31.png";
import Logo32 from "../assets/images/image32.png";
import Logo33 from "../assets/images/image33.png";
import { motion } from "framer-motion";

const images = [
  { src: Logo20, alt: "Acme Logo" },
  { src: Logo21, alt: "Quantum Logo" },
  { src: Logo26, alt: "Echo Logo" },
  { src: Logo27, alt: "Celestial Logo" },
  { src: Logo28, alt: "Pulse Logo" },
  { src: Logo29, alt: " Logo" },
  { src: Logo31, alt: " Logo" },
  { src: Logo32, alt: " Logo" },
  { src: Logo33, alt: " Logo" },
];

export const LogoTicker = () => {
  return (
    <div className=" text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-xl text-center text-white/70">
          Powered by the Best in AI & Automation{" "}
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#242424,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#242424,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
